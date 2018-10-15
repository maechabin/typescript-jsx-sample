class App {
  handleClick(): string {
    return "handlClick";
  }

  render() {
    return (
      <div class="div">
        <h1 onClick="handleClick">Hello World</h1>
      </div>
    );
  }
}
