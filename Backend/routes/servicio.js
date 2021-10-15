const router = require('express').Router();
const servicioController = require('../controllers/servicioController');

router.post('/nuevo', servicioController.nuevo);
router.get('/lista', servicioController.lista);
router.get('/:id', servicioController.ver);
router.put('/asignar/:id/:token', servicioController.asignar);
router.post('/msg', servicioController.msg);

module.exports = router; 
