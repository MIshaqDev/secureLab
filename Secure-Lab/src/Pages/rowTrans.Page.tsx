import { useForm } from "react-hook-form"
import React from "react";
import * as rowTransCtrl from '../controller/rowTrans.Controller';

function RowTransPage() {

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
        rowTransCtrl.encodeRowTrans(data).then((res) => {
            setEncoded(res.encoded);
        }).finally(() => {
            setEncodeLoading(false);
        });

    }
    // Decoding function
    function decode(data: { text: string; key: string }) {
        setDecodeLoading(true);
        rowTransCtrl.decodeRowTrans(data).then((res) => {
            setDecoded(res.decoded);
        }).finally(() => {
            setDecodeLoading(false);
        });
    }
    // Render the component
    return (
        <div className="text-[var(--text-color)] flex flex-col items-center gap-12 [&>input]:border bg-[var(--background-color)] min-h-screen pb-10 ">
            {/* Heading */}
            <h1 className="text-4xl font-bold mt-6 text-center">Row Transposition Cipher</h1>
            {/* Description */}
            <p className="text-xm font-bold text-justify text-xl text-justify max-w-3xl m-10">The Row Transposition cipher is a type of transposition cipher that rearranges the characters of the plaintext into a grid or matrix based on a specified key. The plaintext is written out in rows, and then the columns are read in a specific order determined by the key to create the ciphertext. For example, if the key is '3142', the first column to be read would be the third column of the matrix, followed by the first, fourth, and second columns. This method of encryption does not alter the actual letters of the plaintext but changes their positions, making it more challenging to decipher without knowing the key. The Row Transposition cipher is relatively simple to implement but can be vulnerable to certain types of cryptanalysis if not used with additional security measures.</p>
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
                        placeholder="Enter key (digits only, e.g., 5241)"
                        {...register("key", {
                            required: "Key is required",
                            validate: (key: string) => {
                                key= String(key);
                                if (typeof key !== "string") return "Invalid key format";

                                const trimmed = key.trim();
                                if (!trimmed) return "Key is required";

                                const numbers = trimmed.split("").map(Number);

                                if (numbers.some(isNaN)) return "Key must contain numbers only";

                                if (numbers.length < 2){
                                    return "Key must contain at least 2 numbers";
                                }

                                const uniqueNumbers = new Set(numbers);
                                if (uniqueNumbers.size !== numbers.length)
                                    return "Numbers must be unique";

                                if (
                                    Math.max(...numbers) > numbers.length ||
                                    Math.min(...numbers) < 1
                                )
                                    return `Numbers must be from 1 to ${numbers.length}`;

                                return true;
                                }
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
                        placeholder="Enter key (digits only, e.g., 5241)"
                        {...decodeRegister("key", {
                            required: "Key is required",
                            validate: (key: string) => {
                                key= String(key);
                                if (typeof key !== "string") return "Invalid key format";

                                const trimmed = key.trim();
                                if (!trimmed) return "Key is required";

                                const numbers = trimmed.split("").map(Number);

                                if (numbers.some(isNaN)) return "Key must contain numbers only";

                                if (numbers.length < 2){
                                    return "Key must contain at least 2 numbers";
                                }

                                const uniqueNumbers = new Set(numbers);
                                if (uniqueNumbers.size !== numbers.length)
                                    return "Numbers must be unique";

                                if (
                                    Math.max(...numbers) > numbers.length ||
                                    Math.min(...numbers) < 1
                                )
                                    return `Numbers must be from 1 to ${numbers.length}`;

                                return true;
                                }
                        })}
                    />

                    {/* Error message for key input */}
                    <span>{decodeErrors.key?.message?.toString()}</span>
                    {/* Decode button */}
                    <button className="border font-bold text-xl b-2 border-[var(--primary-color)] text-[var(--text-color)] px-4 py-2 rounded-full hover:border-[var(--primary-color)] hover:text-[var(--card-background)] hover:rounded-full hover:bg-[var(--text-color)]" type="submit" disabled={decodeLoading}>{decodeLoading ? "DECODING..." : "DECODE"}</button>
                    <div className="text-xl text-[var(--primary-color)] border p-5 rounded-md mt-4 max-h-25 min-h-24 overflow-x-auto  whitespace-pre-wrap break-words">{decoded ? decoded : "Plain text will appear here..."}</div>
                </form>
            </div>
            <style>

            </style>
        </div>
    )
}

export default RowTransPage;