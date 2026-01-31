import { useForm } from "react-hook-form"
import React from "react";
import * as vigenerCtrl from '../controller/vigener.Controller'

function VigenerPage() {

    const encodeForm = useForm<{ text: string; key: string }>();
    const { register, handleSubmit, formState: { errors } } = encodeForm;
    const decodeForm = useForm<{ text: string; key: string }>();
    const { register: decodeRegister, handleSubmit: decodeHandleSubmit, formState: { errors: decodeErrors } } = decodeForm;

    // State to hold the result
    const [encoded, setEncoded] = React.useState<string>("");
    const [decoded, setDecoded] = React.useState<string>("");
    const [encodeLoading, setEncodeLoading] = React.useState<boolean>(false);
    const [decodeLoading, setDecodeLoading] = React.useState<boolean>(false);

    // Encoding and decoding functions
    function encode(data: { text: string; key: string }) {
        setEncodeLoading(true);
        vigenerCtrl.encodedVigener(data).then((res) => {
            setEncoded(res.encoded);
        }).finally(() => {
            setEncodeLoading(false);
        });
    }
    // Decoding function
    function decode(data: { text: string; key: string }) {
        setDecodeLoading(true);
        vigenerCtrl.decodedVigener(data).then((res) => {
            setDecoded(res.decoded);
        }).finally(() => {
            setDecodeLoading(false);
        });
    }
    // Render the component
    return (
        <div className="text-[var(--text-color)] flex flex-col items-center gap-12 [&>input]:border bg-[var(--background-color)] min-h-screen pb-10">
            {/* Heading */}
            <h1 className="text-4xl font-bold mt-6">Vigenere Cipher</h1>
            {/* Description */}
            <p className="text-md font-bold text-justify text-xl text-justify max-w-3xl m-10">The Vigenère cipher is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. It employs a keyword, where each letter of the keyword determines the shift for the corresponding letter in the plaintext. For example, if the keyword is 'LEMON' and the plaintext is 'ATTACKATDAWN', the first letter 'A' is shifted by 'L' (11 positions), the second 'T' by 'E' (4 positions), and so on, cycling through the keyword as needed. This technique makes the Vigenère cipher more secure than simple substitution ciphers, as it reduces the effectiveness of frequency analysis. However, it can still be vulnerable to more advanced cryptanalysis methods if the keyword is short or predictable.</p>
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
                        placeholder="Enter keyword (letters only)"
                        {...register("key", {
                            required: "Key is required",
                            validate: (key: string) => {
                                if (!/^[A-Z]+$/i.test(key)) {
                                    return "Key must contain letters only (A-Z)";
                                }
                                return true;
                            },
                            setValueAs: (v: string) => v.toUpperCase(), // convert to uppercase automatically
                        })}
                    />


                    {/* Error message for key input */}
                    <span>{errors.key?.message?.toString()}</span>
                    {/* Encode button */}
                    <button className="border font-bold text-xl b-2 border-[var(--primary-color)] text-[var(--text-color)] px-4 py-2 rounded-full hover:border-[var(--primary-color)] hover:text-[var(--card-background)] hover:rounded-full hover:bg-[var(--text-color)] mt-5" type="submit" disabled={encodeLoading}>{encodeLoading ? "ENCODING..." : "ENCODE"}</button>
                    {/* Encoded result display */}
                    <div className="text-xl text-[var(--primary-color)] border p-5 rounded-md mt-4 max-h-25 min-h-24 overflow-x-auto  whitespace-pre-wrap break-words">
                        {encoded ? encoded : "Ciphered text will appear here ..."}
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
                        type="text"
                        className="input"
                        placeholder="Enter keyword (letters only)"
                        {...decodeRegister("key", {
                            required: "Key is required",
                            validate: (key: string) => {
                                if (!/^[A-Z]+$/i.test(key)) {
                                    return "Key must contain letters only (A-Z)";
                                }
                                return true;
                            },
                            setValueAs: (v: string) => v.toUpperCase(), // convert to uppercase automatically
                        })}
                    />
                    {/* Error message for key input */}
                    <span>{decodeErrors.key?.message?.toString()}</span>
                    {/* Decode button */}
                    <button className="border font-bold text-xl b-2 border-[var(--primary-color)] text-[var(--text-color)] px-4 py-2 rounded-full hover:border-[var(--primary-color)] hover:text-[var(--card-background)] hover:rounded-full hover:bg-[var(--text-color)]" type="submit" disabled={decodeLoading}>{decodeLoading ? "DECODING..." : "DECODE"}</button>
                    <div className="text-xl text-[var(--primary-color)] border p-5 rounded-md mt-4 max-h-25 min-h-24 overflow-x-auto  whitespace-pre-wrap break-words">{decoded ? decoded : "Deciphered text will appear here ..."}</div>
                </form>
            </div>
            <style>

            </style>
        </div>
    )
}

export default VigenerPage;