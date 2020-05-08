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
                    changeInputValue={this.props.changeInputValue}
                    wrongParams={this.props.state.wrongParams}
                    setValues={this.props.setValues}
                />
                <Counter
                    propsClassName={classes.wrapContainer}
                    counter={this.props.state.counter}
                    incCounter={this.props.incCounter}
                    resetCounter={this.props.resetCounter}
                    // startValue={this.props.state.startValue}
                    // maxValue={this.props.state.maxValue}
                    setStartValue={this.props.state.setStartValue}
                    setMaxValue={this.props.state.setMaxValue}
                    wrongParams={this.props.wrongParams}
                    isDifferentParams={this.props.isDifferentParams}
                />
            </div>
        );
    }
}

export default ParamsCounter;
