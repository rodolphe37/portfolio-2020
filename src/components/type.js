import React from 'react';
import Typed from 'react-typed';

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.roles = ['Developpeur web', '...', 'Thérapeute', '...', 'Lapidaire', '...'];
  }

  render() {
    return (
      <Typed
        loop
        typeSpeed={60}
        backSpeed={60}
        strings={this.roles}
        backDelay={1000}
        loopCount={0}
        showCursor
        className="self-typed"
        cursorChar="|"
      />
    )
  }
}

export default Type;
