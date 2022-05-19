import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Clock from "./Clock";
import reportWebVitals from "./reportWebVitals";

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
            <Avatar user={props.author} />
            <div className="UserInfo-name">{props.author.name}</div>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <Clock text="生活就像海洋" />
    </React.StrictMode>
);

reportWebVitals();

