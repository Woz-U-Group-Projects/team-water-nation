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
    // this.handleGeneration = this.handleGeneration.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    //generate array for text value, convert to string

  }

  handleSubmit(event) {
    var currentText = this.state.value;
    var characterCount = currentText.length;
    const characterLimit = 140;
    var quotient = characterCount / characterLimit;
    var divNumber = Math.round(quotient) + 1;

    console.log(characterCount);
    console.log(quotient);
    console.log(divNumber);

    if (characterCount > characterLimit) {
      let convertedText = currentText.insert(characterLimit, ".,");
      let stringArray = convertedText.split(".,", quotient);
      this.setState({ valueA: stringArray });
      console.log(this.state.valueA);
    }


    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <form style={styles.formArea} onSubmit={this.handleSubmit}>
            <header>
              <p>Welcome to Team Water Nation's Social Poster!</p>
            </header>
            <label>
              <p>Post:</p> 
              <textarea style={styles.textArea} value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
            <input type="submit" value="Convert" />
          </form>

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