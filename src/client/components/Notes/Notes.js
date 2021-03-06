import React from 'react'
import { Modal } from 'react-bootstrap'

import NewNoteForm from './NewNoteForm'

export default React.createClass({
  // gets note data from api
  componentDidMount () {
    this.props.fetchNotes(this.props.flat)
  },
  // functions for opening and closing newNoteForm modal
  getInitialState () {
    return {show: false}
  },
  open () {
    this.setState({show: true})
  },
  close () {
    this.setState({show: false})
  },
  // functions for adding and deleting notes
  delete (id) {
    this.props.deleteNote(id)
  },
  add () {

  },
  render () {
    const {notes} = this.props
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={this.open}>Add new</button>
        <Modal show={this.state.show} onHide={this.close}>
          <NewNoteForm />
        </Modal>
        {Object.keys(notes).map(noteId => {
          return (
            <div key={noteId}>
              <div>{notes[noteId].content}</div>
              <div>{notes[noteId].author}</div>
              <button onClick={() => this.delete(noteId)}>&#10060;</button>
            </div>
          )
        })}
      </div>
    )
  }
})
