declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

class App {
  handleClick(): string {
    return 'handlClick';
  }

  render() {
    return (
      <div className="div">
        <h1 onClick="handleClick">Hello World</h1>
        <Child hello={'Hello'}>
          <GrandChild />
        </Child>
      </div>
    );
  }
}

const Child = (props: { hello: string }) => {
  const { hello } = props;
  return <div>{hello} World</div>;
};

const GrandChild = () => {
  return <div>GrondChild</div>;
};
