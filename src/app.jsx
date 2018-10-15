var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.handleClick = function () {
        return 'handlClick';
    };
    App.prototype.render = function () {
        return (<div className="div">
        <h1 onClick="handleClick">Hello World</h1>
        <Child hello={'Hello'}/>
      </div>);
    };
    return App;
}());
var Child = function (props) {
    var hello = props.hello;
    return <div>{hello} World</div>;
};
