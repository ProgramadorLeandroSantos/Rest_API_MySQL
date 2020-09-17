const express = require('express');
const router = express.Router();
const FilmController = require('../controllers/filmsController');

router.post('/films',FilmController.Create);
router.get('/films',FilmController.Read);
router.get('/films/:id',FilmController.ReadOne);
router.put('/films/:id',FilmController.Update);
router.delete('/films/:id',FilmController.Destroy);

module.exports = router;