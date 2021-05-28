import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet } from 'react-native';

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
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.text}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Blue #268bd2</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.text}>Orange #cb4b16</Text>
        </View>
        <View style={[styles.box, styles.magneta]}>
          <Text style={styles.text}>Magenta #d33682</Text>
        </View>
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
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  magneta: {
    backgroundColor: '#d33682',
  },
});

export default App;
