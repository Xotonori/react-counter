import React from 'react';
import classes from './Button.module.scss';


class Button extends React.Component {

    render() {
        return (
            <button
                disabled={this.props.conditionDisable}
                onClick={this.props.onChangeValue}
                className={classes.Button}
                style={{backgroundColor: this.props.backgroundColor}}
            >
                {this.props.name}
            </button>
        );
    }
}


export default Button;

