import { get } from '../utils/HttpClient'
const base = 'https://rickandmortyapi.com/api'

const getCharacters = async () => {
    const endpoint = `${base}/character`
    return await get(endpoint)
}

export { getCharacters }
