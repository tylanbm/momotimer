import { useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import OptionButton from './Components/OptionButton';
import Ionicons from 'react-native-vector-icons/Ionicons';




const workTime = 25;
const smallBreakTime = 5;
const largeBreakTime = 15;


export default function App() {

  const [minuteTimer, setMinuteTimer] = useState(workTime);
  const [secondTimer, setSecondTimer] = useState(0);
  const [workSessionsCompleted, setWorkSessions] = useState(0);
  const [workingState, setWorkingState] = useState(0);
  const [pausedState, setPausedState] = useState(0);
  
  const togglePauseState = () => {
    if (pausedState) {
      setPausedState(false)
    } else {
      setPausedState(true)
    }
  }


  const Timer = () => {
    
      let minute = workTime;

      togglePauseState();

      let second = 0;

      let oneSecInterval = setInterval(() => {
        console.log(second +'sec.');
        second--;
        
        if (second < 0){
          setSecondTimer(0)
        } else {
          setSecondTimer(second);
        }
        
        if (second < 0 & minute > 0 ) {
          minute--;
          setMinuteTimer(minute);
          second = 59;
          setSecondTimer(second);
        } else if(second <= 0 && minute <= 0) {
          clearInterval(oneSecInterval);
        }
      }, 1000);
    
  }

  //Timer();

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
          <OptionButton />
      </View>
      
      
      <Text style={styles.title}>Momo timer</Text>
      <Text style={styles.subtitle}>Work like no one has {'\n'} before.</Text>
      <View style={styles.spacer64} />
      <View style={styles.spacer64} />
      <Text style={styles.timerDisplay}>{minuteTimer}:{secondTimer<10 ? '0' + secondTimer : secondTimer}</Text>
      
      <View style={styles.spacer8} />
      <View style={styles.containerRow}>
        <Ionicons name='egg-outline' size={20} />
        <Ionicons name='egg-outline' size={20} />
        <Ionicons name='egg-outline' size={20} />
        <Ionicons name='egg-outline' size={20} />
      </View>
      
      <View style={styles.spacer64} />
      <View style={styles.spacer64} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={() => {Timer();}}>
          <Text style={styles.startButtonText}>{pausedState ? 'Pause': 'Start'}
          </Text>
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
    
  },
  container2: {
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    margin: 16,
    marginTop: 32,
  },
  containerRow: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  spacer8: {
    marginTop: 8,
  },
  spacer64: {
    marginTop: 64,
  },
  title: {
    fontFamily: "WorkSans",
    fontSize: 48,
    fontWeight: '700', 
  },
  subtitle: {
    fontFamily: "WorkSans",
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
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
    width: 150,
    paddingVertical: 8,
    borderRadius:11,
    backgroundColor: '#0071E3',
    alignItems: 'center',
    marginRight: 12,
  },
  startButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'WorkSans',
  },
  resetButton: {
    width: 150,
    paddingVertical: 8,
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
