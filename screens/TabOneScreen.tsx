import { StyleSheet } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Image, TouchableOpacity} from 'react-native';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image source={require('./oldman.jpeg')} />
      <Text style= {{color: '#888', fontSize:30, padding: 30, textAlign: 'center' }}>
        do you have good taste in music?
        </Text>

    <TouchableOpacity
      onPress={() => alert('bad music taste!')}
      style={styles.button}>
      <Text style={styles.buttonText}>find out</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
    }, 
});
