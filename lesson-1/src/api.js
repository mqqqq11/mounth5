
import axios from "axios";

export const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

//CRUD
// create
    axios.post('https://jsonplaceholder.typicode.com/posts/', {
        title:'ffs',
        body: 'bba',
        userId: 1
    })

    axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        title: 'dldw dw',
        body: 'wdda',
    })

// read
    axios.get('https://jsonplaceholder.typicode.com/posts/')

    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=15')
// update 
    axios.put('https://jsonplaceholder.typicode.com/posts/10', {
        title: 'lallala',
        body: 'lallala',
        userId: 2
    })

    axios.put('https://jsonplaceholder.typicode.com')
// delete
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')