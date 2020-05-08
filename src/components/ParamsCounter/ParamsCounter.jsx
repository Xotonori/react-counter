import React from 'react';
import classes from './ParamsCounter.module.scss';
import Counter from './Counter/Counter';
import Params from './Params/Params';

class ParamsCounter extends React.Component {

    render() {
        return (
            <div className={classes.ParamsCounter}>
                <Params
                    propsClassName={classes.wrapContainer}
                    startValue={this.props.state.startValue}
                    maxValue={this.props.state.maxValue}
                    wrongParams={this.props.state.wrongParams}
                    changeInputValue={this.props.changeInputValue}
                    setValues={this.props.setValues}
                />
                <Counter
                    propsClassName={classes.wrapContainer}
                    counter={this.props.state.counter}
                    setStartValue={this.props.state.setStartValue}
                    setMaxValue={this.props.state.setMaxValue}
                    wrongParams={this.props.state.wrongParams}
                    incCounter={this.props.incCounter}
                    resetCounter={this.props.resetCounter}
                    isDifferentParams={this.props.isDifferentParams}
                />
            </div>
        );
    }
}

export default ParamsCounter;
