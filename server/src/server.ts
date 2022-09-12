import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Felipe' },
        { id: 2, name: 'Gabriel' },
        { id: 3, name: 'Livia' },
        { id: 4, name: 'Ariane' },
        { id: 5, name: 'Jose' },
    ])
})

app.listen(3333);