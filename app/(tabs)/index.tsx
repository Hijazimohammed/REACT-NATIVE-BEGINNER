import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import heroImage from '@/assets/images/hero.png';
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={heroImage}
        resizeMode='cover'
        style={styles.imageBackground}>
        <Text style={styles.text}>Hello World!</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
