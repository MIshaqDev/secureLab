import { useState } from 'react';
import { useForm } from "react-hook-form";
import * as monoCtrl from '../controller/mono.Controller';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, RefreshCw, Copy, ArrowRight, FileKey } from 'lucide-react';

function MonoalphaPage() {
    const [activeTab, setActiveTab] = useState<'encode' | 'decode'>('encode');
    const [result, setResult] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [copied, setCopied] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<{ text: string; key: string }>();

    const onSubmit = async (data: { text: string; key: string }) => {
        setLoading(true);
        setResult("");
        try {
            await new Promise(resolve => setTimeout(resolve, 300));

            let response;
            if (activeTab === 'encode') {
                response = await monoCtrl.encodeController(data);
                setResult(response.encoded);
            } else {
                response = await monoCtrl.decodeController(data);
                setResult(response.decoded);
            }
        } catch (err) {
            console.error(err);
            setResult("Error: Invalid Key or Input");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (result) {
            navigator.clipboard.writeText(result);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center justify-center gap-3">
                    <FileKey className="text-blue-400" />
                    Monoalphabetic Cipher
                </h1>
                <p className="text-(--text-muted) max-w-2xl mx-auto">
                    A substitution cipher where each letter in the plaintext is replaced by a letter from a fixed, shuffled alphabet key.
                </p>
            </motion.div>

            <div className="pro-card p-1 md:p-8 bg-(--surface-color) shadow-xl relative overflow-hidden">

                {/* Tab Switcher */}
                <div className="flex justify-center mb-8 border-b border-white/5 pb-1">
                    <div className="flex gap-4">
                        {(['encode', 'decode'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => { setActiveTab(tab); setResult(""); reset(); }}
                                className={`px-6 py-2 rounded-t-lg font-medium transition-all duration-200 flex items-center gap-2 border-b-2 ${activeTab === tab
                                    ? 'border-blue-400 text-blue-400 bg-white/5'
                                    : 'border-transparent text-(--text-muted) hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {tab === 'encode' ? <Lock size={16} /> : <Unlock size={16} />}
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: activeTab === 'encode' ? -10 : 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: activeTab === 'encode' ? 10 : -10 }}
                        transition={{ duration: 0.2 }}
                        className="w-full"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Input Section */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-(--text-muted) flex items-center gap-2">
                                            Input Text
                                        </label>
                                        <textarea
                                            {...register("text", { required: "Message is required" })}
                                            className="pro-input w-full h-40 resize-none"
                                            placeholder={activeTab === 'encode' ? "Enter secret message..." : "Paste encrypted text..."}
                                        />
                                        {errors.text && <span className="text-(--error-color) text-xs">{errors.text.message}</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-(--text-muted) flex items-center justify-between">
                                            <span>Secret Key (26 unique letters)</span>
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={26}
                                            placeholder="e.g., QWERTYUIOPASDFGHJKLZXCVBNM"
                                            {...register("key", {
                                                required: "Key is required",
                                                validate: (key: string) => {
                                                    if (key.length !== 26) return "Must be 26 letters";
                                                    if (!/^[A-Za-z]+$/.test(key)) return "Letters only";
                                                    if (new Set(key.toUpperCase().split('')).size !== 26) return "Unique letters only";
                                                    return true;
                                                },
                                                setValueAs: (v) => v.toUpperCase()
                                            })}
                                            className="pro-input w-full uppercase tracking-widest"
                                        />
                                        {errors.key && <span className="text-(--error-color) text-xs">{errors.key.message}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="pro-button w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
                                    >
                                        {loading ? <RefreshCw className="animate-spin" size={18} /> : (activeTab === 'encode' ? <Lock size={18} /> : <Unlock size={18} />)}
                                        {loading ? 'Processing...' : (activeTab === 'encode' ? 'Encrypt Message' : 'Decrypt Message')}
                                    </button>
                                </div>

                                {/* Output Section */}
                                <div className="space-y-2 flex flex-col">
                                    <label className="text-sm font-medium text-[--text-muted] flex items-center gap-2">
                                        Result
                                    </label>
                                    <div className="relative grow bg-black/20 border border-white/10 rounded-lg p-6 group transition-colors hover:bg-black/30">
                                        {result ? (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="h-full flex flex-col"
                                            >
                                                <p className="font-mono text-lg text-blue-400 wrap-break-word whitespace-pre-wrap leading-relaxed">
                                                    {result}
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={handleCopy}
                                                    className="absolute top-4 right-4 p-2 rounded-md bg-white/5 text-[--text-muted] hover:text-white hover:bg-white/10 transition-colors"
                                                    title="Copy to clipboard"
                                                >
                                                    {copied ? <span className="text-emerald-500 text-xs font-bold">Copied</span> : <Copy size={18} />}
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <div className="h-full flex flex-col items-center justify-center text-[--text-muted] opacity-40 gap-3">
                                                <ArrowRight size={32} />
                                                <span className="text-sm">Output will appear here</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default MonoalphaPage;