import { useForm } from "react-hook-form"
import React from "react";
import * as monoCtrl from '../controller/mono.Controller';

function MonoalphaPage() {
    const encodeForm = useForm<{ text: string; key: string }>();
    const { register, handleSubmit, formState: { errors } } = encodeForm;
    const decodeForm = useForm<{ text: string; key: string }>();
    const { register: decodeRegister, handleSubmit: decodeHandleSubmit, formState: { errors: decodeErrors } } = decodeForm;

    // State to hold the result
    const [encoded, setEncoded] = React.useState<string>("");
    const [encodeLoading, setEncodeLoading] = React.useState<boolean>(false);
    const [decoded, setDecoded] = React.useState<string>("");
    const [decodeLoading, setDecodeLoading] = React.useState<boolean>(false);

    // Encoding and decoding functions
    function encode(data: { text: string; key: string }) {
        setEncodeLoading(true);
        monoCtrl.encodeController(data).then((res) => {
            setEncoded(res.encoded);
        }).finally(() => {
            setEncodeLoading(false);
        });
    }
    // Decoding function
    function decode(data: { text: string; key: string }) {
        setDecodeLoading(true);
        monoCtrl.decodeController(data).then((res) => {
            setDecoded(res.decoded);
        }).finally(() => {
            setDecodeLoading(false);
        });
    }
    // Render the component
    return (
        <div className="text-[var(--text-color)] flex flex-col items-center gap-12 [&>input]:border bg-[var(--background-color)] min-h-screen pb-10">
            {/* Heading */}
            <h1 className="text-4xl font-bold mt-6 text-center">Monoalphabatic Cipher</h1>
            {/* Description */}
            <p className="text-xl text-justify max-w-3xl m-10">The monoalphabetic cipher is a type of substitution cipher where each letter in the plaintext is replaced by a fixed letter from a scrambled alphabet. Unlike the Caesar cipher, which shifts letters by a set number, the monoalphabetic cipher uses a completely different mapping for each letter. For example, 'A' might be replaced with 'Q', 'B' with 'X', and so on, based on a predetermined key. This method provides a higher level of security compared to simple shift ciphers, as there are 26! (factorial) possible keys, making brute-force attacks impractical. However, it is still vulnerable to frequency analysis since the relative frequencies of letters in the ciphertext remain unchanged from the plaintext.</p>
            <div className="flex flex-col gap-30 md:flex-row md:gap-20">
                {/* Encoding form */}
                <form onSubmit={handleSubmit(encode)} className="flex flex-col items-center gap-4 [&>.input]:border [&>.input]:p-2 [&>.input]:rounded-md [&>span]:text-red-500 text-center text-sm [&>.input]:w-80 [&>.input]:placeholder:font-bold [&>span]:h-2 mb-4 [&>textarea]:min-h-24 [&>.input]:focus:border-[var(--primary-color)] [&>.input]:outline-none">
                    {/* Encoding form header */}
                    <h2 className="text-2xl font-bold">Encode</h2>
                    {/* Textarea for input */}
                    <textarea
                        className="input"
                        {...register("text", { required: "This field is required" })}
                        placeholder="Enter text to encrypt"
                        required
                    />
                    {/* Error message for text input */}
                    <span className="">{errors.text?.message}</span>
                    {/* Range input for key */}
                    <input
                        type="text"
                        className="input"
                        maxLength={26}
                        placeholder="Enter 26-letter key"
                        {...register("key", {
                            required: "Key is required",
                            validate: (key: string) => {
                                if (key.length !== 26) return "Key must be 26 letters";
                                const upperKey = key.toUpperCase();
                                const letters = new Set(upperKey.split(''));
                                if(letters.has(' ')) return "Key must not contain spaces";
                                if(letters.has('1') || letters.has('2') || letters.has('3') || letters.has('4') || letters.has('5') || letters.has('6') || letters.has('7') || letters.has('8') || letters.has('9') || letters.has('0')) return "Key must only contain letters A-Z";
                                if (letters.size !== 26) return "All letters must be unique";
                                if (!/^[A-Z]+$/.test(upperKey)) return "Only letters A-Z are allowed";
                                return true;
                            },
                            setValueAs: (v: string) => v.toUpperCase(), // convert to uppercase automatically
                        })}
                    />

                    {/* Error message for key input */}
                    <span>{errors.key?.message?.toString()}</span>
                    {/* Encode button */}
                    <button className="border font-bold text-xl b-2 border-[var(--primary-color)] text-[var(--text-color)] px-4 py-2 rounded-full hover:border-[var(--primary-color)] hover:text-[var(--card-background)] hover:rounded-full hover:bg-[var(--text-color)] mt-5" type="submit" disabled={encodeLoading}>{encodeLoading ? "Encoding..." : "Encode"}</button>
                    {/* Encoded result display */}
                    <div className="text-xl text-[var(--primary-color)] border p-5 rounded-md mt-4 max-w-80 max-h-25 min-h-24 overflow-x-auto  whitespace-pre-wrap break-words">
                        {encoded ? encoded : "Ciphertext will appear here ....."}
                    </div>
                </form>
                {/* Decoding form */}
                <form onSubmit={decodeHandleSubmit(decode)} className="flex flex-col items-center gap-4 [&>.input]:border [&>.input]:p-2 [&>.input]:rounded-md [&>span]:text-red-500 text-center text-sm [&>.input]:w-80 [&>.input]:placeholder:font-bold [&>span]:h-2 mb-4 [&>textarea]:min-h-24 [&>.input]:focus:border-[var(--primary-color)] [&>.input]:outline-none">

                    {/* Decoding form header */}
                    <h2 className="text-2xl font-bold">Decode</h2>

                    {/* Textarea for input */}
                    <textarea
                        className="input"
                        {...decodeRegister("text", { required: "This field is required" })}
                        placeholder="Enter text to decrypt"
                        required
                    />

                    {/* Error message for text input */}
                    <span>{decodeErrors.text?.message}</span>

                    {/* Range input for key */}
                    <input
                        className="input"
                        type="text"
                        maxLength={26}
                        placeholder="Enter 26-letter key"
                        {...decodeRegister("key", {
                            required: "Key is required",
                            validate: (key: string) => {
                                if (key.length !== 26) return "Key must be 26 letters";
                                const upperKey = key.toUpperCase();
                                const letters = new Set(upperKey.split(''));
                                if(letters.has(' ')) return "Key must not contain spaces";
                                if(letters.has('1') || letters.has('2') || letters.has('3') || letters.has('4') || letters.has('5') || letters.has('6') || letters.has('7') || letters.has('8') || letters.has('9') || letters.has('0')) return "Key must only contain letters A-Z";
                                if (letters.size !== 26) return "All letters must be unique";
                                if (!/^[A-Z]+$/.test(upperKey)) return "Only letters A-Z are allowed";
                                return true;
                            },
                            setValueAs: (v: string) => v.toUpperCase(), // convert to uppercase automatically
                        })}
                    />
                    {/* Error message for key input */}
                    <span>{decodeErrors.key?.message?.toString()}</span>
                    {/* Decode button */}
                    <button className="border font-bold text-xl b-2 border-[var(--primary-color)] text-[var(--text-color)] px-4 py-2 rounded-full hover:border-[var(--primary-color)] hover:text-[var(--card-background)] hover:rounded-full hover:bg-[var(--text-color)]" type="submit" disabled={decodeLoading}>{decodeLoading ? "Decoding..." : "Decode"}</button>
                    <div className="text-xl text-[var(--primary-color)] border p-5 rounded-md mt-4 max-w-80 max-h-25 min-h-24 overflow-x-auto  whitespace-pre-wrap break-words">{decoded ? decoded : "Plaintext will appear here ....."}</div>
                </form>
            </div>
            <style>

            </style>
        </div>
    )
}

export default MonoalphaPage;