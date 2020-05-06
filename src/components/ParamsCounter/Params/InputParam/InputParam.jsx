import React from 'react';
import classes from './InputParam.module.scss';

class InputParam extends React.Component {

    render() {
        return (
            <div className={classes.wrapInputParam}>
                <label htmlFor={this.props.id}>{this.props.labelValue}</label>
                <input type={'number'} value={this.props.inputValue} id={this.props.id}/>
            </div>
        );
    }
}

export default InputParam;






