const initialState = {
    posts: [],
    text: ''
}

export default function(state=initialState, action) {
    switch(action.type) {
        case "SET_NOTES" :
            return {...state, posts: action.payload};

        case "ADD_NOTE" :
            return {...state, posts: [...state.posts, action.payload]};
        
        case "DELETE_NOTE" :
            return {...state, posts: [...state.posts.filter( (note) =>  action.payload !== note.id )]};

        case "ADD_TEXT" :
            return {...state, text: action.payload};
        
        case "EDIT_TEXT" :
            return {...state, posts: [...state.posts.filter( (note) =>  action.payload.id !== note.id ), action.payload]}

        default: return state;
    }
}