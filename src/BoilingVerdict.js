import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    // 保留三位小数并四舍五入后的转换结果
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius  >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
// 温度输入框
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    // 用来接收输入到 input 中的值
    handleChange(e) {
        //Before: this.setState({ temperature: e.target.value });
        // 这个是从父组件那边传过来的方法，这个方法主要通过修改父组件自身的内部 state 来处理数据的变化。
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        // 为了让 temperature 的值保持一直，所以需要读取从父组件传递过来的 props 值
        const temperature = this.props.temperature;
        const scale =  this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]};</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }
    handleCelsiusChange(temperature) {
        this.setState({temperature, scale: 'c'})
    }
    handleFahrenheitChange(temperature) {
        this.setState({temperature, scale: 'f'})
    }
    render() {
        const scale = this.state.scale;
        /**
         * 这里的 temperature 是 TemperatureInput 中需要用到的变量，
         * 这种将子组件中需要共享的 state 放到父组件的行为称为“变量提升”
         */
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput 
                scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

export default Calculator