'use strict';

import React from 'react'
import { Card, CardTitle, Row, Col } from 'react-materialize'
import { Link } from 'react-router'

export default class PlaygroundController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          image: "/img/marooned-heading.png",
          title: "Marooned",
          description: <p>
            <strong>Marooned</strong> is an ongoing incremental game project developed with React & ES6.
            Marooned was inspired by various MMO, survival, and incremental games.
          </p>,
          href: "/marooned"
        }
      ]
    }
  }

  render() {
    return (
        <Row>
          <Col l={8} m={12} offset="l2">
            <h1>Playground</h1>
            <p>Below you'll find random projects or games that I'm tinkering on right now.</p>
            <Row>
              {this.state.entries.map((entry,index) => {
                return (
                  <Col m={6} s={12} key={index}>
                    <Card
                      header={<CardTitle image={entry.image}>{entry.title}</CardTitle>}
                      actions={[
                        <Link className="btn waves-effect waves-light red" to={entry.href} key="view"><i className="material-icons left">videogame_asset</i> Play Game</Link>
                      ]}>
                      <div className="m-b-1">
                        {entry.description}
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
    );
  }
}
