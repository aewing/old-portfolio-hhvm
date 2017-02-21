'use strict';

import React from 'react'
import { Link } from 'react-router'
import { Row, Col, Card, CardTitle } from 'react-materialize'

export default class HomepageController extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="homepage">
        <div className="spotlight valign-wrapper">
          <div className="valign">
            <div>
              <h1>Andrew Ewing</h1>
              <h2>Software Engineer</h2>
              <h3>Phoenix, AZ</h3>
              <a href="mailto:contact@aewing.io"><h4>contact@aewing.io</h4></a>
              <div>
                <a href="https://github.com/aewing" target="_blank" title="Check me out on GitHub" className="btn waves-effect waves-light btn-large btn-floating black m-a-1">
                  <i className="fa fa-github-circle"></i>
                </a>
                <a href="https://twitter.com/gurudrew" target="_blank" className="btn waves-effect waves-light btn-large btn-floating light-blue m-a-1">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="mailto:contact@aewing.io" className="btn waves-effect waves-light btn-large btn-floating green m-a-1">
                  <i className="material-icons">email</i>
                </a>
                <button className="btn waves-effect waves-light btn-large btn-floating red m-a-1 callusio-1302"><i className="material-icons">phone</i></button>
              </div>
            </div>
          </div>
        </div>
        <Row className="homepage__cv">
          <h3 className="center-align">About Me</h3>
          <div style={{backgroundColor:'#dedede',display:'table-cell',width:'100%',paddingLeft:'24px',paddingRight:'24px'}}>
            <Col s={8} offset="s2" className="left-align" style={{backgroundColor:'#fff',boxShadow:'1px 2px 2px rgba(0, 0, 0, 0.25)'}}>
              <div className="m-a-1">
                <p>
                  I am a self-taught developer raised in Atlanta, Georgia. I now live in Phoenix, AZ with my daughter and girlfriend.
                </p>
                <h4>Background</h4>
                <p>
                  My first experience with web development was in middle school working with HTML and CSS.<br/>
                  I continued pursuing development in my free time. It wasn't long before I was writing JavaScript and PHP.
                </p>
                <p>
                  Before graduating high school, I managed to talk my way into an entry level developer role with CyberMark International, a local SEM company.
                  I googled my way through various issues with many popular frameworks and ecommerce platforms, learning every day.
                </p>
                <p>
                  The experience I gained allowed me to take on numerous contract roles for friends and acquaintances, various development shops and local businesses.
                  Most recently I have worked for several maturing startups, managing teams of varying sizes and working alongside very capable senior level developers.
                </p>
                <h4>At Work</h4>
                <p>
                  As a developer, I strive to learn and utilize the most valuable tools for project stakeholders, prioritizing cost of development and user-perceived performance.
                </p>
                <p>
                  My dream stack consists of Laravel, React (ES6), MySQL 5.7, Redis, Ubuntu (Docker where applicable) and ElasticSearch, if it serves a purpose.<br/>
                  I am comfortable with several languages and frameworks and enjoy learning, so please don't hesitate to contact me if this doesn't describe your stack.
                </p>
                <h4>At Home</h4>
                <p>
                  I enjoy gaming and play and create video games as a hobby. I also enjoy grilling and smoking meat, drinking bourbon, flying drones, playing board games, and camping with my family.
                </p>
                <p>
                  I spend a great deal of my free time tinkering with new tools, languages, and frameworks.
                </p>
              </div>
            </Col>
          </div>
          <Col s={12} className="center-align">
            <h3>Work History</h3>
            <Row>
              <Col s={12} m={6} l={3}>
                <Card header={<CardTitle image="/img/picmonic-heading.png">Picmonic</CardTitle>}>
                  <h4>About Picmonic</h4>
                  <p>Picmonic is an audio-visual learning platform designed to aid med and nursing students.</p>
                  <h4>Duties</h4>
                  <p>Frontend and backend development with PHP, SCSS, and JS (Angular). Aided in integration of ElasticSearch.</p>
                  <h4>Stack</h4>
                  <p>Git, PHP (FuelPHP & Laravel), ElasticSearch, Docker, MySQL, Angular, and Bootstrap.</p>
                </Card>
              </Col>
              <Col s={12} m={6} l={3}>
                <Card header={<CardTitle image="/img/trout-heading.png">Imaginary Trout</CardTitle>}>
                  <h4>About Imaginary Trout</h4>
                  <p>Imaginary Trout is a full service web shop offering WordPress customization, custom programming, and search engine marketing.</p>
                  <h4>Duties</h4>
                  <p>Custom programming (PHP, JavaScript), server administration (Linux, Apache, nginx) as well as WordPress plugin and theme development.</p>
                  <h4>Stack</h4>
                  <p>The stacks varied from client to client, but generally adhered to the LEMP model.</p>
                </Card>
              </Col>
              <Col s={12} m={6} l={3}>
                <Card header={<CardTitle image="/img/phenocode-heading.png">PHENOCode</CardTitle>}>
                  <h4>About PHENOCode</h4>
                  <p>PHENOCode is an innovative software company located in Phoenix, AZ. PHENOCode focuses on licensed software solutions and game development.</p>
                  <h4>Duties</h4>
                  <p>Frontend and backend website development (PHP, JavaScript, CSS), database and server administration, and technical consolutation.</p>
                  <h4>Stack</h4>
                  <p>The primary stack for PHENOCode projects was a LEMP environment focusing on Laravel and React.</p>
                </Card>
              </Col>
              <Col s={12} m={6} l={3}>
                <Card header={<CardTitle image="/img/kahping-heading.png">KahPing</CardTitle>}>
                  <h4>About KahPing</h4>
                  <p>KahPing is a real estate and rental property search tool.</p>
                  <h4>Duties</h4>
                  <p>Frontend and backend development with Laravel, Bootstrap, jQuery and MySQL, as well as remote management of a small team of mid and senior level engineers, both local and abroad.</p>
                  <h4>Stack</h4>
                  <p>Git, HHVM / PHP (Laravel, Hacklang), Bootstrap v4, ElasticSearch, MySQL.</p>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col s={12} className="center-align">
            <h3>Feedback</h3>
            <div className="testimonial">
              <Row>
                <Col m={6}>
                  <blockquote>
                    "I've worked alongside Drew for almost a year and have seen him excel at moving the product forward with his unique problem solving skills and passionate coding ability.
                    His knowledge of front-end javascript frameworks, web standards, ADA compliance, and back-end technologies have helped us to increase our velocity and solve more problems in less time.
                    Drew's ideas and work will be beneficial for us long into the future, I personally have learned a lot from him and have only optimistic predictions for his career trajectory."
                  </blockquote>
                  <strong>Ryan Allen - Designer - Picmonic Inc.</strong>
                  <hr/>
                </Col>
                <Col m={6}>
                  <blockquote>
                    "For over a year, we were fortunate to have Andrew as a vital member of our technology
                    development team. We thoroughly enjoyed our time working with Andrew, and came to
                    know him as a truly valuable contributor to our organization. He is honest, dependable,
                    and incredibly hard-working. He also brings a fierce passion to satisfy the wants and
                    needs of both end users and internal stakeholders. Beyond that, he has an impressive
                    learning curve with an incredible track record of personal growth."
                  </blockquote>
                  <strong>Ron Robertson - CEO - Picmonic Inc.</strong>
                  <hr/>
                </Col>
              </Row>
              <Row>
                <Col m={6}>
                  <blockquote>
                    "Drew is dedicated to providing quality work. While keeping up with the latest industry standards he is always looking ahead to the implementation of future technology.
                    He checks and rechecks his software before turning it in for presentation.
                    He strives to make his programs as user friendly as possible understanding
                    usability as a leading factor of application use and success."
                  </blockquote>
                  <strong>Laura Franklin - Visual Communications Director - Lovelee.co</strong>
                  <hr/>
                </Col>
                <Col m={6}>
                  <blockquote>
                    "I was impressed with Andrew's willingness to make changes, which were frequent,
                    his creative ability, the speed of his work, and his overall dedication.
                    I always found Andrew to be thoughtful, thorough, and very professional." -
                  </blockquote>
                  <strong>Heidi Quigley Larke - President - KahPing, LLC</strong>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="homepage__cv">
          <Col s={12} className="text-center">
            <h3>Preferred Technologies</h3>
            <Row className="technologies text-center">
              <Col s={3}>
                <img src="/img/technologies/hhvm-logo.svg" title="HHVM" />
              </Col>
              <Col s={3}>
                <img src="/img/technologies/php-logo.svg" title="PHP" />
              </Col>
              <Col s={3}>
                <img src="/img/technologies/js-logo.svg" title="JavaScript" />
              </Col>
              <Col s={3}>
                <img src="/img/technologies/mysql-logo.svg" title="MySQL" />
              </Col>
            </Row>
            <Row className="technologies text-center">
              <Col s={3}>
                <img src="/img/technologies/html5-logo.svg" title="HTML5" />
              </Col>
              <Col s={3}>
                <img src="/img/technologies/css3-logo.svg" title="CSS3" />
              </Col>
              <Col s={3}>
                <img src="/img/technologies/laravel-logo.svg" title="Laravel" />
              </Col>
              <Col s={3}>
                <img src="/img/technologies/node-logo.svg" title="Node" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
