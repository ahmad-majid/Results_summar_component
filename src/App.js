import React from 'react';
import './App.css'; 

function App() {
  return (
  
  
     
        <div className="container">
          <div className="box_content">
            <div className="left-side">
              <p className="result">Your Result</p>
              <div className="sidebar-circle">
                <div className="number">
                  <p className="number_sidebar">76</p>
                  <span className="number_sidebar-small">of 100</span>
                </div>
              </div>
              <div className="great">
                <p className="great-text">Great</p>
              </div>
              <div className="sidebar-text">
                <p>You scored higher than 65% of</p>
                <p>the people who have taken</p>
                <p>these tests</p>
              </div>
            </div>
            
            <div className="right-side">
              <p>Summary</p>


              <div className="reaction_box">
              
                <span className="reaction_text">Reaction</span>
                <div className="fleu">
                  <span className="reaction_texts">80/<span className="memmory_100">100</span></span>
                </div>
              </div>
              <div className="memory_box">
             
                <span className="memmory">Memory</span>
                <div className="fleu">
                  <span className="reaction_texts">92/<span className="memmory_100">100</span></span>
                </div>
              </div>
              <div className="verbal_box">
              
                <span className="verbal">Verbal</span>
                <div className="fleu">
                  <span className="reaction_texts">61/<span className="memmory_100">100</span></span>
                </div>
              </div>
              <div className="visual_box">
                
                <span className="visual">Visual</span>
                <div className="fleu">
                  <span className="reaction_texts">72/<span className="memmory_100">100</span></span>
                </div>
              </div>
              <div className="submit_btn">
                <button>Continue</button>
              </div>
            </div>
       
          </div>
          <div className="footer_abc">
      <p>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io/profile/ahmad-majid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://www.linkedin.com/in/ahmad-majid-957ba9200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ahmad Majid
        </a>
      </p>
    </div>
       
        </div>
      
    
  );
}

export default App;
