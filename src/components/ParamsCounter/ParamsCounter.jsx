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
                />
                <Counter
                    propsClassName={classes.wrapContainer}
                    counter={this.props.counter}
                    incCounter={this.props.incCounter}
                    resetCounter={this.props.resetCounter}
                />
            </div>
        );
    }
}

export default ParamsCounter;
