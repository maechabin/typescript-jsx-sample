var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.handleClick = function () {
        return 'handlClick';
    };
    App.prototype.render = function () {
        return (React.createElement("div", { className: "div" },
            React.createElement("h1", { onClick: "handleClick" }, "Hello World"),
            React.createElement(Child, { hello: 'Hello' },
                React.createElement(GrandChild, null))));
    };
    return App;
}());
var Child = function (props) {
    var hello = props.hello;
    return React.createElement("div", null,
        hello,
        " World");
};
var GrandChild = function () {
    return React.createElement("div", null, "GrondChild");
};
