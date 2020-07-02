import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import US from './US.js';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import TweeDisplay from './TweetDisplay.js'
import Adrienne from './Adrienne.js'


class HomePage extends Component {

  constructor(props) {
      super(props)
      this.state = {
        optionSelected: ""  }
      }

  setRequestedPerson = name => {
    this.setState({
      optionSelected: name
    })
  }

  render() {
    return (
      <div>
            <Container fluid>
                  <Button  variant="warning" onClick={() => this.setRequestedPerson("US")}>Team</Button>
                  {' '}
                  <Button  variant="danger">Rep Snapshot</Button>
                  <Button  variant="danger">Eric Brakley</Button>
                  <Button  variant="danger" onClick={() => this.setRequestedPerson("Adrienne")} >Adrienne Bennett</Button>
                  <Button  variant="danger">Susan Collins</Button>
                  <Button  variant="danger">Dale Crafts</Button>
                  <Button  variant="danger">Bruce Poliquin</Button>
                  <Button  variant="danger">Paul LePage</Button>
                  <Button  variant="danger">Susan Collins</Button>
                  {' '}
                  <Button  variant="primary">Dem Snapshot</Button>
                  <Button  variant="primary">Chellie Pingree</Button>
                  <Button  variant="primary">Janet Mills</Button>
                  <Button  variant="primary">Sara Gideon</Button>
            </Container>

            {this.state.optionSelected==="US" ? <US /> : ''}
            {this.state.optionSelected==="Adrienne" ? <Adrienne /> : ''}

        </div>
    )
  }
}


export default HomePage
