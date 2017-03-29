'use strict';

import React from 'react'

export default class MaroonedController extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col l={8} m={12} offset="l2">
          <h1>Marooned</h1>
          <iframe id="marooned" src="/_marooned/index.html"></iframe>;
        </Col>
      </Row>
  }
}
