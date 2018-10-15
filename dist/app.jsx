var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.handleClick = function () {
        return "handlClick";
    };
    App.prototype.render = function () {
        return (<div class="div">
        <h1 onClick="handleClick">Hello World</h1>
      </div>);
    };
    return App;
}());
//# sourceMappingURL=app.jsx.map