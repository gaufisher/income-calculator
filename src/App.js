import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import logo from './logo.svg';
import './App.css';
import IncomeContainer from './components/IncomeContainer.jsx';

injectTapEventPlugin();

class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
				<div className="App">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h2>Welcome to React</h2>
					</div>
					<IncomeContainer />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
