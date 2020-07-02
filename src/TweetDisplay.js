import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Timeline } from 'react-twitter-widgets'

import Jumbotron from 'react-bootstrap/Jumbotron'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


class TweetDisplay extends Component {

  constructor(props) {
    super(props)
    this.state = { tweetTimeline: "" }
  }

  getTweet = () => {
    return <a class="twitter-timeline" data-height="300" data-width="300" href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
  }

  render() {

    return (
      <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName= {this.props.prof}
        noFooter='true'
        noBorder='true'
        options={{height: 450, width: 300}}
      />
      </div>
    )
  }


 }




export default TweetDisplay
