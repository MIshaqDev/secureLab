import { useForm } from "react-hook-form"
import React from "react";
import * as ceaserController from '../controller/ceaser.Controller';

function CeaserPage() {
    // Forms for encoding and decoding
    const encodeForm = useForm<{ text: string; key: number }>();
    const { register, watch, handleSubmit, formState: { errors } } = encodeForm;
    const decodeForm = useForm<{ text: string; key: number }>();
    const { register: decodeRegister, watch: decodeWatch, handleSubmit: decodeHandleSubmit, formState: { errors: decodeErrors } } = decodeForm;

    // State to hold the result
    const [encoded, setEncoded] = React.useState<string>("");
    const [decoded, setDecoded] = React.useState<string>("");
    const [encodeLoading, setEncodeLoading] = React.useState<boolean>(false);
    const [decodeLoading, setDecodeLoading] = React.useState<boolean>(false);

    // Encoding and decoding functions
    async function encode(data: { text: string; key: number }) {
        try {
            setEncodeLoading(true)
            const response = await ceaserController.ceaserEncodeController(data)
            setEncoded(response);
        } catch (err) {
            window.alert("An error occurred during encoding.");
        } finally {
            setEncodeLoading(false)
        }
    }
    // Decoding function
    async function decode(data: { text: string; key: number }) {
        try {
            setDecodeLoading(true)
            const response = await ceaserController.ceaserDecodeController(data);
            setDecoded(response)
        } catch (err) {
            window.alert("An error occurred during decoding.")
        } finally {
            setDecodeLoading(false)
        }
    }
    // Render the component
    return (
        <div className="text-[var(--text-color)] flex flex-col items-center gap-12 [&>input]:border bg-[var(--background-color)] min-h-screen pb-10 w-screen">
            {/* Heading */}
            <h1 className="text-4xl font-bold mt-6">Caesar Cipher</h1>
            {/* Description */}
            <p className="text-xl text-center m-5 max-w-3xl mt-4">The Caesar cipher is a classic encryption technique that shifts each letter in the plaintext by a fixed number of positions down the alphabet. For example, with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on. This simple substitution cipher is named after Julius Caesar, who reportedly used it to protect his military communications. While easy to implement, the Caesar cipher offers limited security and can be easily broken with frequency analysis or brute-force attacks. Nevertheless, it serves as an excellent introduction to the concepts of encryption and cryptography.</p>
            <div className="flex flex-col gap-30 md:flex-row md:gap-20">
                {/* Encoding form */}
                {/* Encoding form header */}
                {/* Textarea for input */}
                <form onSubmit={handleSubmit(encode)} className="flex flex-col items-center gap-4 [&>.input]:border [&>.input]:p-2 [&>.input]:rounded-md [&>span]:text-red-500 text-center text-sm [&>.input]:w-80 [&>.input]:placeholder:font-bold [&>span]:h-2 mb-4 [&>textarea]:min-h-24 [&>.input]:focus:border-[var(--primary-color)] [&>.input]:outline-none">
                    <h2 className="text-2xl font-bold">Encode</h2>

                    <textarea
                        className="input"
                        {...register("text", { required: "This field is required" })}
                        placeholder="Enter text to encrypt"
                        required
                    />
                    {/* Error message for text input */}
                    <span className="">{errors.text?.message}</span>
                    {/* Range input for key */}
                    <div className="flex gap-5">
                        {/* Range slider for key */}
                        <label htmlFor="keyRange" className="text-xl font-bold">Shift</label>
                        <input id="keyRange" className="w-full h-2 bg-[var(--primary-color)] rounded-full appearance-none cursor-pointer border border-[var(--primary-color)] relative top-2" type="range" min={1} max={25} defaultValue={1} {...register("key", { required: "This field is required", valueAsNumber: true })}
                            onInput={(e) => { (e.currentTarget as HTMLInputElement).style.background = `linear-gradient(to right, var(--text-color) ${e.currentTarget.value}%, var(--text-color) ${e.currentTarget.value}%, var(--primary-color) 100%)`; }} />
                        {/* Range slider value display */}
                        <span className="relative text-xl text-[var(--text-color)] w-10 border rounded-md">{watch("key")}</span>
                    </div>
                    {/* Error message for key input */}
                    <span>{errors.key?.message?.toString()}</span>
                    {/* Encode button */}
                    <button className="border font-bold text-xl b-2 border-[var(--primary-color)] text-[var(--text-color)] px-4 py-2 rounded-full hover:border-[var(--primary-color)] hover:text-[var(--card-background)] hover:rounded-full hover:bg-[var(--text-color)] mt-5" type="submit">{encodeLoading ? "ENCODING....." : "ENCODE"}</button>
                    {/* Encoded result display */}
                    <div className="text-xl text-[var(--primary-color)] border p-5 rounded-md mt-4 max-w-80 max-h-25 min-h-24 overflow-x-auto  whitespace-pre-wrap break-words">
                        {encoded ? encoded : "Cipher text will appear here....."}
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
                    <div className="flex gap-5">

                        {/* Range slider for key */}
                        <label htmlFor="keyRange" className="text-xl font-bold">Shift</label>
                        <input type="range" min={1} max={25} defaultValue={1} {...decodeRegister("key", { required: "This field is required", valueAsNumber: true })}
                            className="w-full h-2 bg-[var(--primary-color)] rounded-full appearance-none cursor-pointer border border-[var(--primary-color)] relative top-2"
                            onInput={(e) => { (e.currentTarget as HTMLInputElement).style.background = `linear-gradient(to right, var(--text-color) ${e.currentTarget.value}%, var(--text-color) ${e.currentTarget.value}%, var(--primary-color) 100%)`; }} />
                        <span className="relative text-xl text-[var(--text-color)] w-10 border rounded-md">{decodeWatch("key")}</span>
                    </div>
                    {/* Error message for key input */}
                    <span>{decodeErrors.key?.message?.toString()}</span>
                    {/* Decode button */}
                    <button className="border font-bold text-xl b-2 border-[var(--primary-color)] text-[var(--text-color)] px-4 py-2 rounded-full hover:border-[var(--primary-color)] hover:text-[var(--card-background)] hover:rounded-full hover:bg-[var(--text-color)]" type="submit" disabled={decodeLoading}>{decodeLoading ? "DECODING....." : "DECODE"}</button>
                    <div className="text-xl text-[var(--primary-color)] border p-5 rounded-md mt-4 max-w-80 max-h-25 min-h-24 overflow-x-auto  whitespace-pre-wrap break-words">
                        {decoded ? decoded : "Plain text will appear here....."}
                    </div>
                </form>
            </div>
            <style>

            </style>
        </div>
    )
}
export default CeaserPage;