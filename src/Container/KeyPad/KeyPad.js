import React, {Component} from "react";
import {connect} from "react-redux";
import './KeyPad.css';

class KeyPad extends Component {
    render() {
        return (
            <div className="button">
                <button name="1" onClick={e => this.props.Add(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.Add(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.Add(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.Add(e.target.name)}>+</button><br/>

                <button name="4" onClick={e => this.props.Add(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.Add(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.Add(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.Add(e.target.name)}>-</button><br/>

                <button name="7" onClick={e => this.props.Add(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.Add(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.Add(e.target.name)}>9</button>
                <button name="*" onClick={e => this.props.Add(e.target.name)}>x</button><br/>

                <button name="C" onClick={() => this.props.Clear()}>C</button>
                <button name="0" onClick={e => this.props.Add(e.target.name)}>0</button>
                <button name="=" onClick={() => this.props.Calc()}>=</button>
                <button name="/" onClick={e => this.props.Add(e.target.name)}>÷</button><br/>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        Add:(a)=>dispatch({type: "ADD", value:a}),
        Calc:()=>dispatch({type: "CALC"}),
        Clear:()=>dispatch({type: "CLEAR"})
    }
};

export default connect(null, mapDispatchToProps)(KeyPad);