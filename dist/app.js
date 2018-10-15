var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.handleClick = function () {
        return "handlClick";
    };
    App.prototype.render = function () {
        return (React.createElement("div", { class: "div" },
            React.createElement("h1", { onClick: "handleClick" }, "Hello World")));
    };
    return App;
}());
//# sourceMappingURL=app.js.map