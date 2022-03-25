import { useEffect, useState } from "react"
import { View } from "react-native"
// import { Character } from "./character.loc"
import { getCharacters } from '../../api/rickandmorty.api'

export const CharacterList = () => {

    const [characters, setCharacters] = useState(() => [])

    useEffect(() => {
        handleRequest()
    }, [])

    const handleRequest = async () => {
        const response = await getCharacters()
        console.log('response => ', response)
        setCharacters(response)
    }

    return (
        <View>
            {/* <Character></Character> */}
        </View>
    )
}
