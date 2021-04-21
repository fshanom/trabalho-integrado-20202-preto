var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Anuncios = require('../models/anuncios');

var bodyParserJson = bodyParser.json();
router.use(bodyParserJson);


/* GET users listing. */
router.route('/')
    .get(async (req, res, next) => {
        try {
            const anunciosBanco = await Anuncios.find({}).maxTime(5000);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(anunciosBanco);
        } catch (err) {
            next(err);
        }
    })
    .post((req, res, next) => {

        Anuncios.create(req.body)
            .then((anuncio) => {
                console.log('Anuncio criado ', anuncio);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(anuncio);
            }, (err) => next(err))
            .catch((err) => next(err));

    })

router.route('/:id')
    .get((req, res, next) => {

        Anuncios.findById(req.params.id)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));


    })
    .delete((req, res, next) => {

        Anuncios.findByIdAndRemove(req.params.id)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp.id);
            }, (err) => next(err))
            .catch((err) => next(err));


    })
    .put((req, res, next) => {

        Anuncios.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
            .then((anuncio) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(anuncio);
            }, (err) => next(err))
            .catch((err) => next(err));

    })

module.exports = router;