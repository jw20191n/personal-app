import api from '../api/register';

export function getCaptcha(payload = {}){
    return async () => {
        console.log('test');
        const result = await applicationCache.getCaptcha(payload);
        console.log(result);
    }
}

