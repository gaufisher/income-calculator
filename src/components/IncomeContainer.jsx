import React from 'react';
import IncomeLine from './IncomeLine.jsx';
import RaisedButton from 'material-ui/RaisedButton';

export default class IncomeContainer extends React.Component {
	constructor(props) {
		super(props);

		this.adjustTotal = this.adjustTotal.bind(this);
		this.onAddChild = this.onAddChild.bind(this);

		this.state = {
			numChildren: 0,
			total: 0
		}
	}

	adjustTotal(diff) {
		this.setState({total: this.state.total + diff})
	}

	onAddChild() {
		let numChildren = this.state.numChildren + 1;
		this.setState({numChildren});
	}

	render () {
		let incomeLines = [];
		for(let i = 0; i < this.state.numChildren; i++) {
			incomeLines.push(<IncomeLine adjustTotal = {this.adjustTotal} key={i}/>)
		}
		return (
			<div style={{display: 'flex', flexFlow:'row wrap'}}>
				<div style={{flexGrow: 2}}>
					{incomeLines}
				</div>
				<div style={{flexGrow: 1}}>
					Total is: {this.state.total}
				</div>
				<div style={{flex: '100%'}}>
					<RaisedButton
						label="Add Income Line"
						fullWidth={true}
						onTouchTap={this.onAddChild}
					 />
				</div>
			</div>
		)
	}
}
