import React from 'react';
import Clipboard from 'react-clipboard.js';
import { notify } from '../actions/notification';

const Caja = ({ color }) => {
  return (
    <div className="caja" style={{ backgroundColor: color }}>
      <div>
        <h3>{color}</h3>
        <Clipboard
          className="btn-clipboard"
          data-clipboard-text={color}
          onClick={notify}
        >
          <i className="far fa-copy"></i>
        </Clipboard>
      </div>
    </div>
  );
};

export default Caja;
