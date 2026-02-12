import * as ceaserService from '../services/ceaser.Services';

const ceaserEncodeController = async (data: {text: string, key: number}) => {
    console.log("Controller Called!");
    const result = await ceaserService.ceaserEncode(data);
    if(result){
        return result.encoded;
    }
}

const ceaserDecodeController = async (data: {text: string, key: number}) => {
    const result = await ceaserService.ceaserDecode(data);
    return result.decoded;
}

export { ceaserEncodeController, ceaserDecodeController }