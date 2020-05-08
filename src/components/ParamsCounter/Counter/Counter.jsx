import React from 'react';
import classes from './Counter.module.scss';
import Button from "../Button/Button";

class Counter extends React.Component {

    render() {

        let setStartValue = this.props.setStartValue;
        let setMaxValue = this.props.setMaxValue;
        let counter = this.props.counter;
        let wrongParams = this.props.wrongParams;
        let isDifferentParams = this.props.isDifferentParams();

        return (
            <div className={`${this.props.propsClassName} ${classes.Counter}`}>
                <div
                    className={`
                    ${classes.screen}
                    ${counter >= setMaxValue && !isDifferentParams || wrongParams ? classes.max : ''}`}
                    style={{fontSize: isDifferentParams ? '16px' : ''}}
                >
                    {
                        wrongParams
                            ?
                            'incorrect value!'
                            :
                            isDifferentParams ? `enter values and press \'set\'` : counter   // Перенос строки! и проблема с wrongParams

                    }
                </div>
                <div>
                    <Button
                        disabled={counter === setMaxValue || isDifferentParams}
                        onChangeValue={this.props.incCounter}
                        name={'inc'}
                        backgroundColor={'#6fb3ff'}
                        active={'darkBlue'}
                    />
                    <Button
                        disabled={counter === setStartValue || isDifferentParams}
                        onChangeValue={this.props.resetCounter}
                        name={'reset'}
                        backgroundColor={'#ff5c48'}
                        active={'darkRed'}
                    />
                </div>
            </div>
        );
    }
}

export default Counter;










