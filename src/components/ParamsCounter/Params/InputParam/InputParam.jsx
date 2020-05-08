import React from 'react';
import classes from './InputParam.module.scss';

class InputParam extends React.Component {

    changeInputValue = (e) => {
        this.props.changeInputValue(+e.currentTarget.value, e.currentTarget.id)
    };

    render() {
        return (
            <div className={classes.wrapInputParam}>
                <label htmlFor={this.props.id}>
                    {this.props.labelValue}
                </label>
                <input
                    type={'number'}
                    value={this.props.inputValue}
                    id={this.props.id}
                    onChange={this.changeInputValue}
                    className={
                        this.props.inputValue < 0 || this.props.wrongParams ?
                        classes.error : ''
                    }
                />
            </div>
        );
    }
}

export default InputParam;






