import React, {Component} from 'react';

export default class NoteCreation extends Component {
    state = {
        text: '',
    }

    setText = (e) => {
        this.setState({
            text: e.target.value
        })
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
                    <button>
                        Add Note
                    </button>
                </span>
            </div>
        )
    }
}