import React from 'react';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

export default class IncomeLine extends React.Component {
	constructor(props) {
		super(props);

		this.handleUpdateWage = this.handleUpdateWage.bind(this);
		this.handleUpdateDuration = this.handleUpdateDuration.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.calculateIncome = this.calculateIncome.bind(this);

		this.state = {
			duration: 0,
			income: 0,
			salaried: false,
			wage: 0
		}
	}

	calculateIncome(wage, duration) {
		let hourlyWage = this.state.salaried ? wage / 2080 : wage;
		const income = hourlyWage * (duration / 12) * 2080;
		const difference = income - this.state.income;
		this.props.adjustTotal(difference);
		return income;
	}

	handleUpdateWage(event) {
		const wage = event.target.value;
		const income = this.calculateIncome(wage, this.state.duration);
		this.setState({wage, income});
	}

	handleUpdateDuration(event) {
		const duration = event.target.value;
		const income = this.calculateIncome(this.state.wage, duration);
		this.setState({duration, income});
	}

	handleToggle(e, salaried) {
		const income = this.calculateIncome(this.state.wage, this.state.duration);
		this.setState({salaried, income});
	}

	render () {
		let wageText = this.state.salaried ? 'Annual Salary' : 'Hourly Wage';
		return (
			<span>
				<Toggle
					label="Salaried"
					onToggle={this.handleToggle}
					style={{width:'200px'}}
				/>
				<TextField
					value={this.state.wage}
					onChange={this.handleUpdateWage}
					floatingLabelText={wageText}
					style={{width:'200px'}}
				/>
				<TextField
					value={this.state.duration}
					onChange={this.handleUpdateDuration}
					floatingLabelText="Months"
					style={{width:'200px'}}
				/>
				<TextField
					disabled={true}
					floatingLabelText="Income"
					value={this.state.income}
					style={{width:'200px'}}
				/>
			</span>
		)
	}
}
