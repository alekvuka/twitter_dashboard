import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Timeline } from 'react-twitter-widgets'
import ListGroup from 'react-bootstrap/ListGroup'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Jumbotron from 'react-bootstrap/Jumbotron'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


class Adrienne extends Component {

  constructor(props) {
    super(props)
    this.state = {
      feed: ""}
  }

  setFeed = newsFeed => {

    this.setState({
    feed: newsFeed
  })
  }



  render() {

    return (
    <div>
      <Row className="justify-content-md-center"  style={{marginTop:'20px', marginLeft: '30px'}}>
          <Col > <h1 style={{color: "red", fontSize: "3em"}}>team:</h1> </Col>
      </Row>
      <Row className="justify-content-md-center"  style={{marginTop:'20px', marginLeft: '30px', marginRight: '40px'}}>
          <Col>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName= "AdrienneMaine"
              noFooter='true'
              noBorder='true'
              options={{height: 550, width: 450}}
            />
          </Col>
          <Col>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName= "AdrienneMaine"
              noFooter='true'
              noBorder='true'
              options={{height: 550, width: 450}}
            />
          </Col>
          <Col>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName= "AdrienneMaine"
              noFooter='true'
              noBorder='true'
              options={{height: 550, width: 450}}
            />
          </Col>
          <Col>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName= "AdrienneMaine"
              noFooter='true'
              noBorder='true'
              options={{height: 550, width: 450}}
            />
          </Col>

      </Row>


      <Row className="justify-content-md-center"  style={{marginTop:'40px', marginLeft: '30px'}}>
          <Col > <h1 style={{color: "blue", fontSize: "3em"}}>suporters: </h1> </Col>
      </Row>
      <Row className="justify-content-md-center"  style={{marginTop:'20px', marginLeft: '30px'}}>
        <Col>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName= "AdrienneMaine"
            noFooter='true'
            noBorder='true'
            options={{height: 550, width: 450}}
          />
        </Col>
        <Col>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName= "AdrienneMaine"
            noFooter='true'
            noBorder='true'
            options={{height: 550, width: 450}}
          />
        </Col>
        <Col>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName= "AdrienneMaine"
            noFooter='true'
            noBorder='true'
            options={{height: 550, width: 450}}
          />
        </Col>
    </Row>

    <Row className="justify-content-md-center"  style={{marginTop:'40px', marginLeft: '30px'}}>
        <Col > <h1 style={{color: "purple", fontSize: "3em"}}>hashtags: </h1> </Col>
    </Row>
    <Row className="justify-content-md-center"  style={{marginTop:'20px', marginLeft: '30px'}}>
      <Col>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName= "AdrienneMaine"
          noFooter='true'
          noBorder='true'
          options={{height: 550, width: 450}}
        />
      </Col>
      <Col>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName= "AdrienneMaine"
          noFooter='true'
          noBorder='true'
          options={{height: 550, width: 450}}
        />
      </Col>
      <Col>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName= "AdrienneMaine"
          noFooter='true'
          noBorder='true'
          options={{height: 550, width: 450}}
        />
      </Col>
  </Row>


  <Row className="justify-content-md-center"  style={{marginTop:'40px', marginLeft: '30px'}}>
      <Col > <h1 style={{color: "green", fontSize: "3em"}}>news: </h1> </Col>
  </Row>
  <Row className="justify-content-md-center"  style={{marginTop:'20px', marginLeft: '30px'}}>
    <Col>

    </Col>
    <Col>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName= "AdrienneMaine"
        noFooter='true'
        noBorder='true'
        options={{height: 550, width: 450}}
      />
    </Col>
    <Col>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName= "AdrienneMaine"
        noFooter='true'
        noBorder='true'
        options={{height: 550, width: 450}}
      />
    </Col>
</Row>

    </div>

    )
  }

  componentDidMount(){
  let Parser = require('rss-parser');
  let parser = new Parser();

  (async () => {
    let newsFeed = await parser.parseURL("https://cors-anywhere.herokuapp.com/https://bangordailynews.com/feed/");


    this.setFeed(newsFeed)
  })();

  debugger

}


 }

export default Adrienne
