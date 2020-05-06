import React from 'react';
import classes from './Params.module.scss';
import Button from "../Button/Button";
import InputParam from "./InputParam/InputParam";

class Params extends React.Component {

    render() {
        return (

            <div className={`${this.props.propsClassName} ${classes.Params}`}>
                <div className={classes.wrapInputParam}>
                    <InputParam
                        id={'maxValue'}
                        labelValue={'max value:'}
                        inputValue={0}
                    />
                    <InputParam
                        id={'startValue'}
                        labelValue={'start value:'}
                        inputValue={0}
                    />
                </div>
                <div className={classes.wrapButton}>
                    <Button
                        conditionDisable={false}
                        onChangeValue={()=>{}}
                        name={'set'}
                        backgroundColor={'#6fb3ff'}
                    />
                </div>
            </div>
        );
    }
}

export default Params;










