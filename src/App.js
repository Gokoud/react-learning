import "./App.css";
import React from "react";

const user = {
    firstName: "Lee",
    lastName: "Mausen",
    avatarUrl:
        "https://artec.oss-cn-shenzhen.aliyuncs.com/nrdfu1coplwrtrst6tnj.jpg",
};

function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

// 组件名称必须以大写字母开头，React 会将以小写字母开头的组件视为原生 DOM 标签。例如 <div/> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

const element = (
    <div>
        {getGreeting(user)}
        <Welcome name="Sara"></Welcome>
    </div>
);

const App = () => {
    return element;
};

export default App;