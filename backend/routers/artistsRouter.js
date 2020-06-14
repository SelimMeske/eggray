const express = require('express');
const router = express.Router();
const db = require('mysql');

const connection = db.createConnection({
    database: 'eggray',
    user: 'mesic',
    password: 'tibor123',
    host: 'localhost'
});

connection.connect(error => {
    if(error) throw error;
    console.log('Database connected.')
});

router.post('/', (req, res, next) => { 

    let artist = {
        name: req.body.name,
        content: req.body.content,
        image: req.body.image
    }

    const command = 'INSERT INTO artists SET name = ?, content = ?, image = ?';

    connection.query(command, [artist.name, artist.content, artist.image], (err, response) => {
        if(err) throw err;

        res.status(200).json({
            message: 'Artist successfully created'
        })
    });
}); 

router.put('/', (req, res, next) => {

    let artist = {
        name: req.body.name,
        content: req.body.content,
        image: req.body.image,
        id: req.body.id
    }

    const command = 'UPDATE artists SET name = ?, content = ?, image = ? WHERE id = ?';

    connection.query(command, [artist.name, artist.content, artist.image, artist.id], (err, response) => {
        if(err) throw err;

        res.status(200).json({
            message: 'Artist successfully updated'
        })
    });


});

router.get('/', (req, res, next) => {
    
    const command = 'SELECT * FROM artists';

    connection.query(command, (err, response) => {
        if(err) throw err;

        res.status(200).json(response);
    })
});

router.delete('/', (req, res, next) => {

    let deleteID = req.body.id;

    const command = 'DELETE FROM artists WHERE ID = ?';

    connection.query(command, deleteID, (err, response) => {
        
        if(err) throw err;

        res.status(200).json('Successfully deleted post.');
    }); 
});

module.exports = router;