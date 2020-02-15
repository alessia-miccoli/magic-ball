import React from 'react';
import getAnswerFromDB from './api/getAnswers';

class MagicBall extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      message: "Ask me a \"yes or no\" question, to know the answer click me.",
      class: "",
      prevIndex: 0
    }

    this.getAnswer = this.getAnswer.bind(this);
    this.generateIndex = this.generateIndex.bind(this);
  }

  generateIndex(){
    let index =  Math.floor((Math.random() * 23) + 1);

    while(index === this.state.prevIndex){
      index = Math.floor((Math.random() * 11) + 1);
    }

    this.setState(()=>({
      prevIndex: index
    }))

    return index;
  }

  getAnswer(){
    const index = this.generateIndex();
    
    getAnswerFromDB(index).then((response) => {
      //this setTimeout is basically here because sometimes I get the answer too fast and the shake effect is interrupted
      //this make it last longer.
      setTimeout(() => {
        this.setState(()=>({
          message: response,
          class: ""
        }))
      }, 1000);
      
    }).catch((error)=>{
      console.log(error);
      this.setState(()=>({
        message: "Seems like my DB is having an existential crisis after this question, try asking again in a few minutes.",
        class: ""
      }))
    });

    this.setState(()=>({
      message: "Thinking...",
      class: "shake"
    }))
  }

  render(){
      return (
      <div className="container">
          <div className={this.state.class} onClick={()=> this.getAnswer()} id="externalBall">
            <div id="internalBall">
              <p className="answer">{this.state.message}</p>
            </div>
          </div>
      </div>
      );
  }
}

export default MagicBall;