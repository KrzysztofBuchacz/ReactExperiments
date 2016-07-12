class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App ctor!');
    this.state = {
      title: 'React experiments'
    }
  }
  render() {
    console.log('App render!');
    var squares = [<Square />, <Square />, <Square />];
    return (
      // In React, the attribute is className, not class
      <div>
        <div className="alert alert-success">{this.state.title}  {squares}
        </div>
        <div><Hello /></div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
