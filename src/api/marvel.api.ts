import { get, post } from '../utils/HttpClient'
const base = 'https://bp-marvel-api.herokuapp.com/marvel-characters'


const createCaracter = async (character: any) => {
    const endpoint = `${base}?idAuthor=2`
    return await post(endpoint, character)
}

const getCharacters = async () => {
    const endpoint = `${base}?idAuthor=2`
    return await get(endpoint)
}

export { createCaracter, getCharacters }
