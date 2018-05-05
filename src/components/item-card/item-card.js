import React, { Component } from 'react';
import './item-card.css'

class Card extends Component {
	render() {
		return <article className="card-container">
			{this.props.discount ? <p className="offer">{this.props.discount + "% off"}</p> : void 0}
			<figure><img src={this.props.img_url} alt="book cover" className="cover-img">
			</img>
			</figure>
			<div className="desc">
				<p>{this.props.name}</p>
				<p><span className={"left " + (this.props.discount ? "crossed" : "")}>${this.props.price}</span>
					<span>&nbsp;{this.props.discount ? "$" + (Number(this.props.price) - Number(this.props.price) * Number(this.props.discount) / 100) : ""}</span><button className="right btn-secondary" onClick={this.props.onClickHandler}>Add to card</button></p>
			</div>
		</article>
	}
}
export default Card