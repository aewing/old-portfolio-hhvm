'use strict';

import React from 'react'
import { Link } from 'react-router'
import { Card, CardTitle, Row, Col } from 'react-materialize'

export default class OpenSourceController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          image: "/img/decouple-heading.png",
          title: "Decouple Framework",
          description: <p>
            <strong>Decouple Framework</strong> is a loosely coupled framework written in Hack.
            Decouple features a DBAL, a command line utility, XHP support, seeds and migrations, and more.
            All of Decouple's key features are async compatible.
          </p>,
          href: "https://github.com/decouple/framework"
        }, {
          image: "/img/mason-heading.png",
          title: "Mason CLI",
          description: <p>
            <strong>Mason CLI</strong> is a lightweight promise-driven command line development tool written in ES6 Javascript.
            Mason features a <a href="https://github.com/aewing/mason-scaffold">scaffolding plugin</a> that allows one to easily construct application components from easy-to-configure template files.
          </p>,
          href: "https://github.com/aewing/mason"
        }
      ]
    }
  }

  render() {
    return (
      <div className="open-source">
        <Row>
          <Col l={8} m={12} offset="l2">
            <Row>
              <Col m={12}>
                <h1 className="m-t-3">Open Source Contributions</h1>
                <p>You can find a number of my open source contributions to various projects and organizations, including Facebook, on <a href="https://github.com/aewing">Github</a>.</p>
                <div className="divider"></div>
              </Col>
              <Col m={12}>
                <h2 className="m-t-3">Open Source Projects</h2>
                <p>The following projects have been created and maintained by yours truly.</p>
              </Col>
              <div className="cards">
                {this.state.entries.map((entry,index) => {
                  return (
                    <Col m={6} s={12} key={index}>
                      <Card
                        header={<CardTitle image={entry.image}>{entry.title}</CardTitle>}
                        actions={[<Link className="btn btn--full waves-effect waves-light black" to={entry.href} key="view"><i className="fa fa-github-circle"></i> View on GitHub</Link>]}>
                        <div className="m-b-1">
                          {entry.description}
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
