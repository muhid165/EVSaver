const express = require('express');
const router = express.Router();
const {
    createStation,
    getAllStation,
    updateStation,
    deleteStation
} = require('../controllers/stationController');
const protect = require('../middlewares/authMiddlewares');

router.post('/', protect, createStation);
router.get('/', protect, getAllStation);
router.put('/:id', protect, updateStation);
router.delete('/:id', protect, deleteStation);

module.exports = router;
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODNlOGRmMGQxMzNhNjgyNTk4ZmIyZjAiLCJpYXQiOjE3NDg5NDYxNDcsImV4cCI6MTc0OTAzMjU0N30.6Dp_Dej5Rj-eB2wVNnhDxD1m45JEmd4iiQH683Asb9E
*/