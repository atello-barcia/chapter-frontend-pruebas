import React from 'react'
import { Button, Image, StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native'
import { Header } from './src/modules/header/header';

export default function App() {

  const _onPressButton = () => {
    alert('tapped');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <View>
        <Image
          style={{
            width: 50,
            height: 50,
            margin: 16,
          }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }} />
      </View>
      <View>
        <Text style={styles.text}>Element 1</Text>
        <Text style={styles.text}>Element 2</Text>
        <Text style={styles.text}>Element 3</Text>
        <Text style={styles.text}>Element 4</Text>
        <Text style={styles.text}>Element 5</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={_onPressButton}
          title="Action"
          color="white"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  text: {
    color: 'blue',
  },
  buttonContainer: {
    backgroundColor: 'green',
    marginTop: 8
  }
});
