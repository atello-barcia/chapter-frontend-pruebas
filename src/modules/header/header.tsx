import React from 'react'
import { Button, StyleSheet, TextInput, View } from "react-native"

export const Header = () => {
    const _onNewCharacter = () => {
        // opens up a modal
    }

    return (
        <View>
            <TextInput style={styles.input} placeholder='Buscar'></TextInput>
            <View style={styles.button}>
                <Button
                    onPress={_onNewCharacter}
                    title="Nuevo"
                    color="white"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4
    },
    button: {
        backgroundColor: '#F30020',
        borderRadius: 4,
        margin: 12
    }
});
