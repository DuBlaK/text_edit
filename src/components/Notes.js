import React, {Component} from 'react';
import InstaService from '../services/myservice';

export default class Notes extends Component {
    InstaService = new InstaService();
    state = {
        notes: [],
    }

    componentDidMount() {
        this.updateNotes();
    }

    updateNotes() {
        this.InstaService.getAllNotes()
        .then(this.onNotesLoaded)
        .catch(this.onError)
    }

    onNotesLoaded = (notes) => {
        this.setState({
            notes,
            error: false,
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(note => {
            const {text, id} = note;

            return (
                <div key={id} className="post">
                    <p>{text}</p>
                </div>
            )
        })
    }
    
    render() {
        const {error, notes} = this.state;

        if(error) {
            return (
                <p>Error</p>
            )
        }
        const items = this.renderItems(notes);
        return (
            <div className="left">
                {items}
            </div>
        )
    }
}