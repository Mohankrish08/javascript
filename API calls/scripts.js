// Get the data using api

fetch('https://jsonplaceholder.typicode.com/todos', {
    method:'POST',
    header:{'content-type': 'application/json'},
    body:JSON.stringify({
        userID: 20,
        id: 10,
        title:'testing',
        completed:false
    })
})
.then((res) => res.json())
.then(json => console.log(json))