class Hello extends React.Component {
  constructor(props) {
    super(props);
    console.log('Hello ctor!');
    this.state = {
      myName: 'NAM'
    }
  }
  render() {
    console.log('Hello render!');
      return (
        <div>
          <input type="text" onChange={this.nameChanged.bind(this) }></input>
            <h1>Hello, { this.state.myName }</h1>
        </div>      
    )
  }
  nameChanged(event) {
    this.setState({
      myName: event.target.value
    });
  }
}

window.Hello = Hello;