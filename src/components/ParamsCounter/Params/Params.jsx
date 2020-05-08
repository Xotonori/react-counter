import React from 'react';
import classes from './Params.module.scss';
import Button from "../Button/Button";
import InputParam from "./InputParam/InputParam";

class Params extends React.Component {

    render() {

        let startValue = +this.props.startValue;
        let maxValue = +this.props.maxValue;
        let wrongParams = this.props.wrongParams;

        return (
            <div className={`${this.props.propsClassName} ${classes.Params}`}>
                <div className={classes.wrapInputParam}>
                    <InputParam
                        id={'maxValue'}
                        labelValue={'max value:'}
                        inputValue={maxValue}
                        changeInputValue={this.props.changeInputValue}
                        wrongParams={wrongParams}
                    />
                    <InputParam
                        id={'startValue'}
                        labelValue={'start value:'}
                        inputValue={startValue}
                        changeInputValue={this.props.changeInputValue}
                        wrongParams={wrongParams}
                    />
                </div>
                <div className={classes.wrapButton}>
                    <Button
                        name={'set'}
                        backgroundColor={'#6fb3ff'}
                        disabled={maxValue < 0 || startValue < 0 || wrongParams}
                        active={'darkBlue'}
                        onChangeValue={() => this.props.setValues(startValue, maxValue)}
                    />
                </div>
            </div>
        );
    }
}

export default Params;










