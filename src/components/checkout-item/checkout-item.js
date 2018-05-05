import React, { Component } from 'react'
import './checkout-item.css'

export default class Item extends Component {
	render() {
		const { img_url, name, deleteHandler } = this.props
		return <div className="container"><img src={img_url} className="left img-x" />
			<p className="left grey">{name}</p>
			<p className="right grey" onClick={deleteHandler}>X</p>
		</div>
	}
} 