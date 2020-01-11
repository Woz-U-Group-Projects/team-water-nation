import React from "react";
import Project from "./components/Project";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Paste your copywriting here'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    var currentText = event.target.value;
    var characterCount = currentText.length;
    var chunks = [];

    for (var i = 0; i < characterCount; i += 140) {
        chunks.push(currentText.substring(i, i + 140));
        this.setState({valueArray: chunks});
    }
    console.log(chunks);
  }

  handleSubmit(event) {
    var currentText = this.state.value;
    var characterCount= currentText.length;
    console.log(characterCount);
    const characterLimit = 140;
    var quotient = Math.ceil(characterCount/characterLimit);
    console.log(quotient);
    var indexOfArray = this.state.valueArray.length;
    for(var i = 0; i < indexOfArray; i += 1) {
      let element = <li>{this.state.valueArray[i]}</li>;
      this.setState({element: element});
    }



    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <form style={styles.formArea} onSubmit={this.handleSubmit}>
            <label>
              Post: <br />
              <textarea style={styles.textArea} value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
            <button type="submit" onClick={this.handleSubmit}>Convert!</button>
          </form>
          <br/>
          <br />
          <ol style={styles.DivGen}>
            {this.state.element}
          </ol>
        </div>
      </div>
    );
  }
}

const styles = ({
  textArea: {
    height: 200,
    marginTop: 25,
    justifyContent: 'center',
    borderColor: '#c1c1c1',
    backgroundColor: "#0A79DE",
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10
  },
  formArea: {
    height: 300,
      marginTop: 10,
      marginLeft: 20,
      justifyContent: 'top',
      alignItems: 'center',
      borderColor: '#c1c1c1',
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: 'gray'
  },
  divGen: {
    border: '2px solic black',
    flex: 1,
    alignItems: ''


  }

})
export default App;

