import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // state = {
  //   selected: undefined,
  // }

  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup className="text-dark">
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected('Uno')}
            className={this.checkSelected('Uno')}
          >
            Uno
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected('Due')}
            className={this.checkSelected('Due')}
          >
            Due
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected('Tre')}
            className={this.checkSelected('Tre')}
          >
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Stato del componente: {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
