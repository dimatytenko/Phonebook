import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return <TailSpin color="#00BFFF" height={120} width={120} />;
  }
}

export default Loader;
