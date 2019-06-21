export default class TextEditorService {
    constructor() {
        this._apiBase = 'http://localhost:3000/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`)
        }

        return res.json()
    }

    getData = async () => {
        const res = await this.getResource('notes');
        return res;
    }

    postData = async (obj) => {
        const res = await fetch(`${this._apiBase}notes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(obj)
        })

        return res.json()
    }

    deleteData = async (id) => {
        const res = await fetch(`${this._apiBase}notes/${id}`, {
            method: 'DELETE'
        })

        return res.json()
    }

    editData = async (id, obj) => {
        const res = await fetch(`${this._apiBase}notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(obj)
        })
        
        return res.json()
    }
}