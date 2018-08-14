import React, { Component } from 'react';
import firebase from "firebase";
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
              clicks: 0,
    }
  }

  componentWillMount(){
    const Clicks = firebase.database().ref('banexams').child('clicks');

    Clicks.on('value', snap => {
      this.setState ({
        clicks: snap.val(),
      })
    })
     

  }
  
  render() {
    return (

      <div id="background" className="Background">

      <div className="App">

        <div className="clickText"><header>Lets ban exams:</header></div>
        <div>
        <button id="button" className="button"
        onClick={() => {

          if (this.state.clicks !== 0){
            this.setState({
              clicks: this.state.clicks+1
            })
          
              
              firebase.database().ref('banexams').set({clicks: this.state.clicks+1})     
              
          }    
            document.getElementById('background').style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);


        }}
        >One ban</button></div>

        

        <div className="clicks"><h2>{this.state.clicks} peoples think exams should be banned.</h2></div>
        <div className="clicks"><h3>1 million peoples = exams are banned<br/><br/>
                                    You click 100 times = good luck 4 u</h3></div>


      

          {/* <br/>
        <div><h2><strong>I hate exams.</strong></h2>
          <h2 onClick={ () => {
            document.getElementById('copy').className = "copyText"

          }}><span className="clickable">&#8675;</span></h2></div>
        <div id="copy"className="copyHide"><p>
        <strong>Exams harm the mind and the body:</strong> they put young people under an enormous amount of unnecessary stress for no other reason than it's the 'easy option'.<br/>
          
          </p>
          <p>
          For millions of students across the world, exam season means torturous pain.<br/>
          And pain of the worst kind, with comments like <em>"we've all been there"</em> and <em>"just get on with it"</em> being the only 'reconciliation' for this unexplained phenomenon.
          <br/> The only time worse is the inevitable results day - the event that is effectively <strong>judgement day on Earth.</strong> 
        </p>

        </div> */}
        
        
      </div>

      </div>
    );
  }
}

export default App;

