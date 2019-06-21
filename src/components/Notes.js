import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getAllNotes} from '../services/actions';
import Note from './Note';
class Notes extends Component {
    componentDidMount() {
        this.props.getAllNotes();
    }

    renderItems(arr) {
    let order = arr.sort((a, b) => b.timestamp - a.timestamp);
        
    return order.map((note) => {

        const {text, id} = note;

        return (
            <Note text={text} key={id} id={id}/>
            )
        })
    }
    
    render() {
        const notes = this.props.posts;

        // if(error) {
        //     return (
        //         <p>Error</p>
        //     )
        // }
        const items = this.renderItems(notes);
        return (
            <div className="left">
                {items}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.notes.posts
    }
}

export default connect(mapStateToProps, {
    getAllNotes
})(Notes)