const express = require('express');
const router = express.Router();
const db = require('mysql');
const multer = require('multer');

MIME_TYPE_MAP = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png' : 'png'
}

let config = multer.diskStorage({
    
    destination: (req, file, cb) => {
        let error = null;
        if(!MIME_TYPE_MAP[file.mimetype]){
            error = new Error('Wrong mime-type');
        }
        cb(error, 'images')
    },
    
    filename: (req, file, cb) => {
        let ext = MIME_TYPE_MAP[file.mimetype];
        let name = file.originalname.toLocaleLowerCase().split(' ').join('-');
        cb(null, name + '-' + Date.now() + '.' + ext)
    }
})

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

router.post('', multer({storage: config}).single('image'), (req, res, next) => { 
    
    let artist = {
        name: req.body.name,
        content: req.body.content,
        image: req.protocol + '://www.' + req.get('host') + '/images/'+ req.file.filename
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