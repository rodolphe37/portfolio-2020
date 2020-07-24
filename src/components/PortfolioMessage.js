import React from 'react';
import Typed from 'react-typed';

class PortfolioMessage extends React.Component {
  constructor(props) {
    super(props);
    this.roles = [" Découvrir, Apprendre, Comprendre... C'est ainsi que je vois la Vie."];
  }

  render() {
    return (
      <Typed
        loop
        typeSpeed={30}
        backSpeed={10}
        strings={this.roles}
        backDelay={1000}
        loopCount={0}
        showCursor
        className="self-typed-Portfolio"
        cursorChar="|"
      />
    )
  }
}

export default PortfolioMessage;
