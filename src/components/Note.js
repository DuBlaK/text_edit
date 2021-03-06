import React, {Component} from 'react';
import { connect } from 'react-redux';
import {deleteNote, editText} from '../services/actions';

class Note extends Component {
    state = {
        txt: this.props.text,
        editMode: false
    }

    setText = (e) => {
        this.setState({txt: e.target.value})

    }

    editNote = (id) => {
        this.props.dispatch(editText(id, {
            text: this.state.txt,
            id,
            timestamp: Date.now(),
        }))
    }

    delNote = (id) => {
        this.props.dispatch(deleteNote(id));
    }
    
    render() {

        const {text, id} = this.props;

        const textOfNote = (text === this.state.txt) ? text : this.state.txt;

        return (
            <div key={id} className="post">
                {this.state.editMode ? 
                <input 
                    type="text" 
                    value={textOfNote} 
                    onBlur={() => this.setState({editMode: false}, () => this.editNote(id))}
                    onChange={this.setText}>
                </input> : 
                <p onDoubleClick={() => this.setState({editMode: true, txt:textOfNote})}>{text}<span id={id} onClick={() => this.delNote(id)}> X</span></p>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.notes.posts
    }
}

export default connect(mapStateToProps)(Note)