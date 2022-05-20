import React from "react";

function WarningBanner(props) {
    if (!props.warn) {
        return null
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('update',prevProps, prevState)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('should',nextProps, nextState)
        return true
    }
    handleToggle() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    render() {
        // 不影响生命周期
        // if(true) {
        //     return null
        // }
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggle}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

// 在组件中的 render 方法中返回 null 并不会影响组件的生命周期。例如，上面这个示例中
// componentDidUpdate 依然会被调用。

export default Page