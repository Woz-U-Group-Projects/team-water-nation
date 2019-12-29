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
      console.log(this.state.valueArray[i]);
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
          <span>
            <div>{this.state.element}</div>
          </span>
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
  }

})
 /* 
  int WordCount = React.createClass({

    getInitialState: function() {
        return{ contacts: [], fullName: "What Ever", smsBalance: 0, command: 'Send Now', charsPerPage: 160, pageCount:0 };
    },
    
    wordCount: function(e){
    
        var currentText = e.target.value;
        //Now we need to recalculate the number of characters that have been typed in so far
        var characterCount = currentText.length;
        var charsPerPageCount = this.state.charsPerPage;
        var unitCount = Math.round(characterCount/charsPerPageCount);
        this.setState({pageCount: unitCount});
    },
    
    render: function() {
        return(
            <div className="md-card">
    
    
            <div className="user_content">
                <ul className="uk-margin">
                    <div className="uk-margin-top">
    
                        <div className="uk-grid" data-uk-grid-margin="">
                            <div className="uk-width-medium-1-1">
                                <div className="md-input-wrapper">
                                <label htmlFor="Message">And Now Your Message</label>
                                <textarea className="md-input autosize_init" cols="30"
                                          data-val="true"
                                          data-val-required="The Message field is required."
                                          id="Message" ref="Message"
                                          rows="3" onChange={this.wordCount} style={{overflowX: "hidden", wordWrap: "break-word", height: 97+"PX"}}></textarea>
                                <span className="md-input-bar"></span></div>
                                <br/>
                                <span className="md-color-grey-300">
                                    Current cost {this.state.pageCount}
                                </span>
                            </div>
                        </div>
    
    
    
                    </div>
                </ul>
            </div>
            </div>
        );
    }
    });
    
    ReactDOM.render(<WordCount/>, document.getElementById("PageContent"))
    */

export default App;