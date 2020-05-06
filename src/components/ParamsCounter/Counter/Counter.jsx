import React from 'react';
import classes from './Counter.module.scss';
import Button from "../Button/Button";

class Counter extends React.Component {

    render() {
        return (
            <div className={`${this.props.propsClassName} ${classes.Counter}`}>
                <div className={`${classes.screen} ${this.props.counter >= 5 ? classes.max : ''}`}>
                    {this.props.counter}
                </div>

                <div>
                    <Button
                        conditionDisable={this.props.counter === 5}
                        onChangeValue={this.props.incCounter}
                        name={'inc'}
                        backgroundColor={'#6fb3ff'}
                    />

                    <Button
                        conditionDisable={this.props.counter === 0}
                        onChangeValue={this.props.resetCounter}
                        name={'reset'}
                        backgroundColor={'#ff6762'}
                    />
                </div>
            </div>
        );
    }

}

export default Counter;










