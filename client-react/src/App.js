import React from "react";
//import Project from "./components/Project";
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
    this.setState({ value: event.target.value });

    var currentText = event.target.value;
    var characterCount = currentText.length;
    var chunks = [];
    for (var i = 0; i < characterCount; i += 138) {
        chunks.push(currentText.substring(i, i + 138));
        this.setState({valueArray: chunks});
    }
    console.log(chunks);
  }

  handleSubmit(event) {
//    var currentText = this.state.value;
 //   var characterCount = currentText.length;
 //   const characterLimit = 138;
 //   var quotient = characterCount / characterLimit;
 //   var divNumber = Math.round(quotient) + 1;

 //   console.log(characterCount);
 //   console.log(quotient);
    var indexOfArray = this.state.valueArray.length;
    for(var i = 0; i < indexOfArray; i += 1) {
      let convert = this.state.valueArray[i];
      arrayList(convert.list);
      console.log(this.state.valueArray[i]);     
    }

    function arrayList(list){
      var output = document.createElement("li");
      var valueNode = document.createTextNode(list);
      output.appendChild(valueNode);
      document.getElementById("textConvert").appendChild(output);

    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <form style={styles.formArea}>
            <header>
              <p>Welcome to Team Water Nation's Social Poster!</p>
            </header>
            <label>
              <p>Post:</p> 
              <textarea style={styles.textArea} value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
            <button type="submit" onClick={this.handleSubmit}>Convert!</button>
            <span style={styles.arrayArea}>
              <ol id="textConvert">
                
              </ol>
            </span>
            <footer>Here is our GitHub:
              <a href="https://github.com/Woz-U-Group-Projects/team-water-nation/projects/1">
                <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="" height="30" width="30"></img>
              </a>
            </footer>
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
  arrayArea: {
      height: 300,
      marginTop: 10,
      marginLeft: 20,
      justifyContent: 'top',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 5,
      borderColor: 'red',
  }

})

export default App;