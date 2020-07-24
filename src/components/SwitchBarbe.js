import React from 'react';

const SwitchBarbe = ({ HandleClicked }) => {


  return (
    <React.Fragment>
      <div className="form-group">
        <span className="switch switch-sm">
          <input type="checkbox" className="switch" id="switch-sm" onClick={() => HandleClicked()} />
          <label for="switch-sm">Small switch</label>
        </span>
      </div>
    </React.Fragment>
  )
}

export default SwitchBarbe;
