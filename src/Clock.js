import React from "react";
import './Clock.css'

// 在 Clock 组件中添加 "state" 来是实现让 Clock 组件实现自我更新
// State 与 props 类似，但是 state 时私有的，并且完全受控与当前组件
// 将函数组件转换成 class 组件
/**
 * 通过下面五步将 Clock 的函数组件转成 class 组件：
 * 1. 创建一个同名的 ES6 class，并且继承于 React.Component。
 * 2. 添加一个空的 render() 方法。
 * 3. 将函数移动到 render() 方法之中。
 * 4. 在 render() 方法中使用 this.props 替换 props。
 * 5. 删除剩余的空函数声明
 */
class Clock extends React.Component {
    // 添加 class 构造函数，并且在函数中初始化 this.state
    // Class 组件应始终使用 props 参数来调用父类的构造函数
    constructor(props) {
        // 将 props 传递到父类的构造函数中：
        super(props);
        this.state = {
            date: new Date(), 
            counter: 'ok',
            arr: [0,1,2]
        }
        this.example = this.example.bind(this);
        this.outer = this.outer.bind(this);
        this.inner = this.inner.bind(this);
    }
    // 将生命周期方法添加到 Class 中
    // 组件被渲染到 DOM 中后运行
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000)
    }
    // 页面卸载后
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    // 实现一个 tick 方法，让 Clock 组件每秒都会调用它，然后通过 this.setState() 来时刻更新 state
    tick() {
        this.setState({
            date: new Date()
        })
    }
    example() {
        this.setState((state, props) => ({
            counter: state.counter + props.text
        }))
    }
    outer() {
        alert('这是 outer 事件')
    }
    inner(e) {
        alert('这是 inner 事件')
        e.stopPropagation()
    }
    showAlert(e, id) {
        const currentId = id
        e.preventDefault()
        console.log(`当前用户的id：${currentId}`)
    }
    send(msg) {
        console.log(arguments)
        console.log(msg)
    }
    render() {
        return (
            <div>
                {this.state.arr.map(item => {
                    return <h1 key={item}>Hello, world! {item}</h1>
                })}
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <div>{this.props.text}</div>
                <span>{this.state.counter}</span>
                <button onClick={this.example}>这是一个按钮</button>
                <div className="outer" onClick={this.outer}>
                    <div className="inner" onClick={this.inner}></div>
                </div>
                <a href="#" onClick={(e) =>this.showAlert(e,1)}>
                    点这里
                </a>
                <button onClick={this.send.bind(this, 'this is a prop','self')}>send Props</button>
            </div>
        )
    }
}

export default Clock