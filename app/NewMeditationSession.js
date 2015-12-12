'use strict';

var React = require('react-native');
var MeditationTimerSetup = require('./MeditationTimerSetup');

var {
  Navigator,
} = React;

var NewMeditationSession = React.createClass({
  render: function () {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) =>
          <MeditationTimerSetup />
        }
      />
    );
  },
});

module.exports = NewMeditationSession;
