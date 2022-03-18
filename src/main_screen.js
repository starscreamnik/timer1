// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, {useState} from 'react';
import {Dimensions, ImageBackground} from 'react-native';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

// importing library to use Stopwatch and Timer
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

const MainScreen = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{opacity: 0.8, width: 1500}}
        source={require('./../assets/triangle.png')}
        resizeMode="cover">
        <SafeAreaView style={styles.container}>
          <ScrollView horizontal={true}>
            <View style={styles.sectionStyle}>
              <Text style={styles.headerText}>TIMER</Text>
              <Stopwatch
                laps
                msecs
                start={isStopwatchStart}
                // To start
                reset={resetStopwatch}
                // To reset
                options={options}
                // Options for the styling
                getTime={time => {
                  console.log(time);
                }}
              />
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  setIsStopwatchStart(!isStopwatchStart);
                  setResetStopwatch(false);
                }}>
                <Text style={styles.buttonText}>
                  {!isStopwatchStart ? 'START' : 'STOP'}
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  setIsStopwatchStart(false);
                  setResetStopwatch(true);
                }}>
                <Text style={styles.buttonText}>RESET</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.headerText}>STOPWATCH</Text>
              <Timer
                totalDuration={timerDuration}
                msecs
                // Time Duration
                start={isTimerStart}
                // To start
                reset={resetTimer}
                // To reset
                options={options}
                // Options for the styling
                handleFinish={() => {
                  alert('Custom Completion Function');
                }}
                // Can call a function On finish of the time
                getTime={time => {
                  console.log(time);
                }}
              />
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  setIsTimerStart(!isTimerStart);
                  setResetTimer(false);
                }}>
                <Text style={styles.buttonText}>
                  {!isTimerStart ? 'START' : 'STOP'}
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  setIsTimerStart(false);
                  setResetTimer(true);
                }}>
                <Text style={styles.buttonText}>RESET</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  headerText: {
    fontSize: 35,
    marginBottom: 20,
    fontFamily: 'Georgia',
    // color: 'bluxe'
  },
  sectionStyle: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    // backgroundColor: 'transparent',
  },
  button: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 25,
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'courier',
    fontSize: 25,
  },
});

const options = {
  container: {
    backgroundColor: '#0000FF',
    opacity: 0.85,
    padding: 5,
    borderRadius: 20,
    width: 250,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontFamily: 'courier new',
    color: '#FFF',
    marginLeft: 7,
  },
};

export default MainScreen;
