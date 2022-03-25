import React from 'react'
import { StyleSheet, Platform, SafeAreaView } from 'react-native'
import { CharacterList } from './src/modules/character-list/character-list';
import { Header } from './src/modules/header/header';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <CharacterList></CharacterList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
