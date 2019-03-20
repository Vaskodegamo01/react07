import React, {Component} from 'react';
import {connect} from "react-redux";
import './Result.css';

class Result extends Component {


    render() {
        return (
            <div className="result">
                <p>{this.props.result}</p>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        result: state.result
    }
};



export default connect(mapStateToProps)(Result);