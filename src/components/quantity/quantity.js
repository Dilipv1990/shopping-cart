import React, { Component } from "react"
import './quantity.css'

export default class Quantity extends Component {
	render() {
		return <div><p className="btn left" onClick={this.props.reduceHandler}>-</p><div className="box left">{this.props.quantity}</div><p className="btn left" onClick={this.props.addHandler}>+</p></div>
	}

}