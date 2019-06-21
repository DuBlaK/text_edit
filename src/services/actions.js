import TextEditorService from './myservice';

const foo = new TextEditorService();

export const getAllNotes = () => {
    const promises = foo.getData();

    return {
        type: "SET_NOTES",
        payload: promises
    }
}

export const postNote = (obj) => {
    return function(dispatch){
        foo.postData(obj)
        .then(res => dispatch({
                type: "ADD_NOTE",
                payload: res
            }),
            err => dispatch({
                type: 'ADD_ERROR',
                payload: err.status
            }))
    }
}

export const deleteNote = (id) => {
    return function(dispatch) {
        foo.deleteData(id)
        .then( () => dispatch({
            type: "DELETE_NOTE",
            payload: id
        }))
    }
}

export const addText = (text) => {
    return {
        type: "ADD_TEXT",
        payload: text,
    }
}

// export const editText = (id, obj) => {
//     return function(dispatch) {
//         foo.editData(id, obj)
//         .then( (res) => dispatch({
//             type: "EDIT_TEXT",
//             payload: obj
//         }))
//     }
// }

export const editText = (id, obj) => {
    const promise = foo.editData(id, obj);

    return {
        type: "EDIT_TEXT",
        payload: promise
    }
}