import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Clock from "./Clock";
import Condition from "./Condition";
import reportWebVitals from "./reportWebVitals";
import LoginControll from "./LoginControll";
import Page from "./noRender";
import BoilingVerdict from "./BoilingVerdict"

function formatDate(date) {
    return date;
}

function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}></img>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar author={props.user.avatarUrl} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

function Commen(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

const author = {
    name: "mausen",
    avatarUrl: "img",
};

function MailBox(props) {
    const unreadMessage = props.unreadMessage;
    if (unreadMessage.length > 0) {
        return null;
    }
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessage.length > 0 && (
                <h2>You have {unreadMessage.length} unread message.</h2>
            )}
        </div>
    );
}

const numbers = [1, 2, 3, 4, 5];
function ListItem(props) {
    return <li>{props.value}</li>
}
function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map(number => <ListItem key={number} value={number} />)}
        </ul>
    )
}
const count = 0
const message = ["react", "re:react", "re:Re: React"];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div>
        {count && <h1>Messages: {count}</h1>}
        </div>
        { true ? <h5>这是 h5</h5> : <h4>这是 h4</h4> }
        <NumberList numbers={numbers} />
        <Page demoProps={message} />
        <MailBox unreadMessage={message} />
        <LoginControll />
        <App />
        <Clock text="生活就像海洋" />
        <Condition />
        <Commen
            author={author}
            text="生活就像海洋"
            date={new Date().toLocaleTimeString()}
        />
        <BoilingVerdict />
    </React.StrictMode>
);

reportWebVitals();