import React, { useEffect, useState } from "react"
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import { Character } from "./character/character"
import { getCharacters } from '../../api/marvel.api'
import { CharacterType } from "../types/character.type"

export const CharacterList = () => {

    const [characters, setCharacters] = useState(() => [])

    useEffect(() => {
        handleRequest()
    }, [])

    const handleRequest = async () => {
        const response = await getCharacters()
        setCharacters(response)
    }

    const renderItem = ({ item }: any) => (
        <Character character={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={characters}
                renderItem={renderItem}
                keyExtractor={(item: any) => item._id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});
