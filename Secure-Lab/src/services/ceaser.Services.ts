const url = import.meta.env.VITE_BACKEND_URL;

const ceaserEncode = async (data: {text: string, key: number})=> {
    console.log("Service Called!");
    const response=  await fetch(`${url}/ceaser/encode`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
    return result;
}

const ceaserDecode = async (data: {text: string, key: number})=> {
    const response = await fetch(`${url}/ceaser/decode`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

export { ceaserEncode , ceaserDecode}