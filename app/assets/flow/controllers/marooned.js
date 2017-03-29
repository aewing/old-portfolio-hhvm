'use strict';

import React from 'react'

export default class MaroonedController extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <iframe id="marooned" src="/_marooned/index.html"></iframe>;
  }
}
