import React from 'react';
import './App.scss';
import ParamsCounter from "./components/ParamsCounter/ParamsCounter";

class App extends React.Component {

    state = {
        counter: 0
    };

    incCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    resetCounter = () => {
        this.setState({
            counter: 0
        })
    };

    render() {
        return (
            <div className={'App'}>
                <ParamsCounter
                    counter={this.state.counter}
                    incCounter={this.incCounter}
                    resetCounter={this.resetCounter}
                />
            </div>
        )
    }
}

export default App;
