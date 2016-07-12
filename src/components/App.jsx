class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: 'aaaaaggGGG'
    }
  }
  render() {
    return (
      // In React, the attribute is className, not class
      <div className="alert alert-success">{this.state.mytext}</div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
