import React, {Component} from 'react';
import { connect } from 'react-redux';
import {postNote, addText} from '../services/actions';
import uniqid from 'uniqid';

class NoteCreation extends Component {
    state = {
        txt: ''
    }

    setText = (e) => {
        this.setState({txt: e.target.value})
        this.props.dispatch(addText(e.target.value))
    }

    createNote = () => {
        // const id = uniqid();
        let note = {
            text: this.props.text,
            timestamp: Date.now()
        }
        
        this.setState({txt: ''}, () => {
            this.props.dispatch(postNote(note));
        })
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.txt}
                    placeholder="write something..."
                    onChange={this.setText}>
                </input>
                <span>
                    <button
                        onClick={this.createNote}>
                        Add Note
                    </button>
                </span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.notes.posts,
        text: state.notes.text
    }
}

export default connect(mapStateToProps)(NoteCreation)