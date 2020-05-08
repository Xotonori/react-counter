import React from 'react';
import './App.scss';
import ParamsCounter from "./components/ParamsCounter/ParamsCounter";

class App extends React.Component {

    state = {
        counter: 0,
        startValue: 0,
        maxValue: 0,
        setStartValue: 0,
        setMaxValue: 0,
        wrongParams: false,
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('state', stateAsString);
    };

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem('state');
        if (stateAsString) {
            state = JSON.parse(stateAsString);
            this.setState(state)
        }
    };

    componentDidMount() {
        this.restoreState();
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

    incCounter = () => {
        this.setState({counter: this.state.counter + 1})
    };

    resetCounter = () => {
        this.setState({counter: this.state.setStartValue})
    };

    changeInputValue = (value, inputName) => {
        this.setState({
            [inputName]: value
        }, () => {
            this.isWrongParams(this.state.startValue, this.state.maxValue);
            this.saveState()
        });
    };

    isWrongParams = (startValue, maxValue) => {
        +startValue >= +maxValue ||
        +startValue < 0 ||
        +maxValue < 0
            ? this.setState({wrongParams: true}) : this.setState({wrongParams: false})
    };

    isDifferentParams = () => {
        return +this.state.startValue !== +this.state.setStartValue || +this.state.maxValue !== +this.state.setMaxValue
    };

    setValues = (setStartValue, setMaxValue) => {
        this.setState({
            counter: setStartValue,
            setStartValue,
            setMaxValue
        })
    };

    render() {
        return (
            <div className={'App'}>
                <ParamsCounter
                    state={this.state}
                    incCounter={this.incCounter}
                    resetCounter={this.resetCounter}
                    changeInputValue={this.changeInputValue}
                    setValues={this.setValues}
                    isDifferentParams={this.isDifferentParams}
                />
            </div>
        )
    }
}

export default App;
