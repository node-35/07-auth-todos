const express = require('express');
const userRouter = require('./user.router');
const toDoRouter = require('./toDo.router');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter);
router.use(toDoRouter);

module.exports = router;