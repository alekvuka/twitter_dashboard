import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import General from './General.js';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import TweeDisplay from './TweetDisplay.js'
import Adrienne from './Adrienne.js'
import Rep from './Rep.js'
import Dem from './Dem.js'


class HomePage extends Component {

  constructor(props) {
      super(props)
      this.state = {
        optionSelected: ""
      }
    }

  setRequestedPerson = name => {
    this.setState({
      optionSelected: name,
    })

  }

  handleFormChange = (e) => {
    this.setState({
      passcode: e.target.value,
    })
  }


  displayHeader = () => {
    return <div>
    <Container fluid>
          <Button  variant="warning" onClick={() => this.setRequestedPerson("General")}>General</Button>
          {' '}
          <Button  variant="danger" onClick={() => this.setRequestedPerson("Rep")}>Rep Snapshot</Button>
          {' '}
          <Button  variant="primary" onClick={() => this.setRequestedPerson("Dem")}>Dem Snapshot</Button>
    </Container>
    </div>
  }
  displayInput = () => {
    return <div>
        <input type='text' name='passCode' onChange={this.handleFormChange} />
    </div>
  }

  render() {
    return (
      <div>
            {this.displayHeader()}
            {this.state.optionSelected==="General" ? <General /> : ''}
            {this.state.optionSelected==="Rep" ? <Rep /> : ''}
            {this.state.optionSelected==="Dem" ? <Dem /> : ''}

        </div>
    )
  }
}


export default HomePage
