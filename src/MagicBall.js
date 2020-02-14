import React from 'react';

class MagicBall extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      message: "Ask me a \"yes or no\" question, to know the answer click me."
    }

    this.getAnswer = this.getAnswer.bind(this);
  }

  getAnswer(){
    setTimeout(() => {
      this.setState({message: "prova"});
    }, 2000)
    this.setState(()=>({
      message: "Thinking..."
    }))
  }

  render(){
      return (
      <div className="container">
          <div onClick={()=> this.getAnswer()} id="externalBall">
              <div id="internalBall">
              <p>{this.state.message}</p>
              </div>
          </div>
      </div>
      );
  }
}

export default MagicBall;