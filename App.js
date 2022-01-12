import { useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OptionButton from './Components/OptionButton';



const workTime = 25;
const smallBreakTime = 5;
const largeBreakTime = 15;


export default function App() {

  const [timer, setTimer] = useState(workTime);

  function Timer() {
    useEffect(() => {
       counter = workTime;

      let oneSecInterval = setInterval(() => {
        console.log(counter +'sec.');
        counter--;
        setTimer(counter);
        if (counter == 0) {
          clearInterval(oneSecInterval);
        }
      }, 1000);
    }, []);
  }

  Timer();

  return (
    <View style={styles.container}>
      <OptionButton />
      <Text>Momo Timer</Text>
      <Text>Work like no one before.</Text>
      <Text>{timer}</Text>
      
      <Text>Dots</Text>
      <Text>Start</Text>
      <Text>Reset</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
