import { get } from '../utils/HttpClient'
const base = 'https://bp-marvel-api.herokuapp.com/marvel-characters'

const getCharacters = async () => {
    const endpoint = `${base}?idAuthor=2`
    return await get(endpoint)
}

export { getCharacters }
