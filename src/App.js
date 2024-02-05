import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

// se vogliamo ELEVARE lo stato ad App, in modo da poi poterlo ri-passare in basso
// come prop a entrambi Table e Detail, è necessario prima di tutto rendere App in condizioni
// di avere uno stato, ovvero trasformarlo in un componente a Classe

class App extends Component {
  state = {
    selected: undefined,
  }

  changeSelected = (newValue) => {
    this.setState({
      selected: newValue,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  selected={this.state.selected}
                  changeSelected={this.changeSelected}
                />
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
