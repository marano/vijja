'use strict';

var React = require('react-native');
var { Actions } = require('react-native-router-flux');
var config = require('./config')

var {
  StyleSheet,
  Text,
  View,
} = React;

var options = [1, 5, 10, 15, 20, 30, 45, 60];

var MeditationTimerLengthChooser = React.createClass({
  _selectOption: function (option) {
    config.timerLength = option;
    Actions.NewMeditationSession();
  },
  render: function () {
    return (
      <View style={styles.container}>
        {options.map((option) => <Text key={option} style={styles.option} onPress={() => this._selectOption(option)}>{option}</Text>)}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  option: {
    fontSize: 30,
    marginBottom: 10,
  },
});

module.exports = MeditationTimerLengthChooser;
