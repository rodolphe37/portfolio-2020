import React from 'react';
import Typed from 'react-typed';

class IncompatibleMess extends React.Component {
  constructor(props) {
    super(props);
    this.roles = [' veuillez afficher cette page sur un écran plus grand...'];
  }

  render(){
    return (
      <Typed
      loop
      typeSpeed={30}
      backSpeed={10}
      strings={this.roles}
      backDelay={1000}
      loopCount={0}
      showCursor
      className="self-typed-incompatible"
      cursorChar="|"
    />
    )
  }
}

export default IncompatibleMess;
