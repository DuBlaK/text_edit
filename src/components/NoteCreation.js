import React, {Component} from 'react';
import InstaService from '../services/myservice';

export default class NoteCreation extends Component {
    InstaService = new InstaService();
    state = {
        text: '',
        error: false,
    }

    setText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    createNote = () => {
        let note = {
            text: this.state.text,
        }
        
        this.InstaService.postNote('notes', note)
        .then(this.onPosted)
        .catch(this.onError)
    }

    onPosted = (resp) => {
        this.setState({text: ''}, console.log(this.state))
    }

    onError = () => {
        this.setState({error: true}, console.log(this.state))
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.text}
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