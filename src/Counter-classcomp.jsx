import React, { Component } from "react";

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count:0
        }
    }
    render() {
        const remove = () => {
            this.setState({
                count: this.state.count - 1
            })
        }
        return (
            <div>
                <h3>Counter is : {this.state.count}</h3>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add</button>
                <button onClick={remove}>Remove</button>
            </div>
        )
    }
}