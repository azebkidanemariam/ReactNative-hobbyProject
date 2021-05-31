import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';
const App = () => {
  let Image_Http_URL = {
    uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>

        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
        <ColorBox colorName="Magneta" hexCode="#d33682" />

        <Image
          source={Image_Http_URL}
          style={{ height: 200, resizeMode: 'stretch' }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
