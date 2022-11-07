import { getGifs } from '../../src/helpers/getGifs';

describe('pruebas en getGift() ', () => {
    test('debe de retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('One Punch');
        console.log(gifs);
 
    });
});