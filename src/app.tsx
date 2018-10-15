declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }

  interface AttributeCollection {
    [name: string]: string | boolean;
  }
}

const Fragment = '<></>';

function dom(
  tag: string | {},
  attrs: JSX.AttributeCollection | null,
  ...children: any[]
): any {
  // Custom Components will be functions
  if (typeof tag === 'function') {
    return tag();
  }
  // regular html tags will be strings to create the elements
  if (typeof tag === 'string') {
    // fragments to append multiple children to the initial node
    const fragments = document.createDocumentFragment();
    const element = document.createElement(tag);
    children.forEach(child => {
      if (child instanceof HTMLElement) {
        fragments.appendChild(child);
      } else if (typeof child === 'string') {
        const textnode = document.createTextNode(child);
        fragments.appendChild(textnode);
      } else {
        // later other things could not be HTMLElement not strings
        console.log('not appendable', child);
      }
    });
    element.appendChild(fragments);
    // Merge element with attributes
    Object.assign(element, attrs);
    return element;
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
        <Child hello="Hello">
          <GrandChild />
        </Child>
      </div>
    );
  }
}

const Child = (props: { hello: string }) => {
  return <div>{props.hello} World</div>;
};

const GrandChild = () => {
  return <div>GrondChild</div>;
};

const app: Element | null = document.querySelector('.app');
if (app) {
  app.appendChild(new App().render());
}
