import React, {Component} from 'react';
import {Card, Carousel} from 'react-bootstrap';

class Item extends Component {
	constructor() {
		super();

		this.state = {
			displayCarousel: false
		}
	}

	render() {
		return (
			<Card>
				<div onClick={() => this.setState({displayCarousel: true})}>
					{
						this.state.displayCarousel ? (
							<Carousel>
								{this.props.images.map((image, i) => (
									<Carousel.Item key={i}>
										<Card.Img  variant="top" src={image.href}/>
									</Carousel.Item>
								))}
							</Carousel>
						) : <Card.Img variant="top" src={this.props.thumbnail.href} />
					}
				</div>

				<Card.Body>
					<Card.Title>{this.props.name}</Card.Title>

						<p>Prices:</p>

						<ul>
							<li>Regular:
								<ul>
									<li>High: ${this.props.priceRange.regular.high}</li>
									<li>Low: ${this.props.priceRange.regular.low}</li>
								</ul>
							</li>

							<li>Selling:
								<ul>
									<li>High: ${this.props.priceRange.selling.high}</li>
									<li>Low: ${this.props.priceRange.selling.low}</li>
								</ul>
							</li>
						</ul>
				</Card.Body>
			</Card>
		);
	}
}

export default Item;