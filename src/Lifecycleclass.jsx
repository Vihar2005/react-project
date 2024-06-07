import React, { Component } from 'react'

export default class LifecycleFun extends Component {
    constructor(props){
        super(props);
        console.log('constructor callling....');
        this.state = {
            color: 'red'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                color: 'yellow'
            })
        }, 3000);
    console.log('component did mount calling....');

    }
    static getDerivedstateFromProps(props,state){
        console.log('props value :' + props.color);
        console.log('get Derivrd state from props colling...' + state.color);
        // return null;
        return state;
    }

    shouldComponentUpdate(){
        console.log('should Component Update calling...');
        return false;
        // return true;
    }

    getSnapshotBeforeUpdate(prevProps,Prevstate){
        console.log('get Snapshot Before Update calling....');
        console.log('get prev color is : '+Prevstate.color);
        return null;
    }

    componentDidUpdate(){
        console.log('finnally component updated....');
    }

    componentWillUnmount(){
        console.log('lifecycle completed');
    }

    render() {
        console.log('render calling....');
        console.log(this.state.color);
        return (
            <div>
                <h2>Life Cycle class based</h2>
                LifecycleFun : {this.state.color}
            </div>
        )
    }
}
