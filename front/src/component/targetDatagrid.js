import React from 'react';
import Griddle from 'griddle-react';
import data from '../store/griddle.js';

class TargetDatagrid extends React.Component {
  render() {
    return <Griddle results={data} />
  }
}

module.exports = TargetDatagrid;
