import { useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
        if (counter < 0) {
          clearInterval(oneSecInterval);
        }
      }, 1000);
    }, []);
  }

  //Timer();

  return (
    <View style={styles.container}>
      <OptionButton />
      <Text style={styles.title}>Momo Timer</Text>
      <Text style={styles.subtitle}>Work like no one has before.</Text>
      <Text style={styles.timerDisplay}>{timer}:00</Text>
      
      <Text>Dots</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>

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
  title: {
    fontFamily: "WorkSans",
    fontSize: 54,
    fontWeight: '700', 
  },
  subtitle: {
    fontFamily: "WorkSans",
    fontSize: 20,
    fontWeight: '700',
  },
  timerDisplay: {
    fontFamily: "WorkSans",
    fontSize: 84,
    fontWeight: 'normal',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  startButton: {
    width: 100,
    paddingVertical: 10,
    borderRadius:11,
    backgroundColor: '#0071E3',
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'WorkSans',
  },
  resetButton: {
    width: 100,
    paddingVertical: 10,
    borderRadius: 11,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#272729',
    fontSize: 14,
    fontFamily: 'WorkSans',
  },
});
