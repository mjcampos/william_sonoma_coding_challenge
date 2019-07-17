import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import Item from './Item';

class App extends Component {
	render() {
		var {items} = this.props;
		var rows = [];
		var numOfCols = 3;

		for(var i = 0; i < items.length; i += numOfCols) {
			rows.push(items.slice(i, i + numOfCols));
		}

		return (
			<Container>
				<h1 className="text-center">Williams-Sonoma Coding Challenge</h1>

				{rows.map((row, i) => (
					<Row key={i}>
						{row.map(item => (
							<Col key={item.id}>
								<Item {...item}/>
							</Col>
						))}
					</Row>
				))}
			</Container>
		);
	}
}

var mapStateToProps = state => {
	return {
		items: state
	}
};

export default connect(mapStateToProps, null)(App);