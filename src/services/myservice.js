import { async } from "q";

export default class InstaService {
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

    getAllNotes = async () => {
        const res = await this.getResource('notes');
        return res;
    }

    postNote = async (url, obj) => {
        const res = await fetch(`${this._apiBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        return obj
    }
}