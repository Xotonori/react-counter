import React from 'react';
import classes from './Button.module.scss';

class Button extends React.Component {

    render() {
        return (
            <button
                onClick={this.props.onChangeValue}
                className={`${classes.Button} ${classes[this.props.active]}`}
                style={{backgroundColor: this.props.backgroundColor}}
                disabled={this.props.disabled}
            >
                {this.props.name}
            </button>
        );
    }
}

export default Button;

