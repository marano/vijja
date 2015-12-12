'use strict';

var React = require('react-native');
var { Router, Route } = require('react-native-router-flux');
var NewMeditationSession = require('./NewMeditationSession');
var CountdownMeditationTimer = require('./CountdownMeditationTimer');

var vijja = React.createClass({
  render: function() {
    return (
      <Router hideNavBar={true}>
        <Route name="NewMeditationSession" component={NewMeditationSession} initial={true} />
        <Route name="CountdownMeditationTimer" component={CountdownMeditationTimer} />
      </Router>
    );
  }
});

module.exports = vijja;
