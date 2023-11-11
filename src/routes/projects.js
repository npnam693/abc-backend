const express = require('express');
const router = express.Router();

const projectController = require('../app/controllers/ProjectController');

router.get('/project-unis', projectController.getAllProjectUni);
router.put('/:slug/isChecked', projectController.updateIsChecked);
router.get('/:slug', projectController.get);
router.get('/', projectController.getAll);
router.post('/', projectController.create);
router.put('/', projectController.update);
router.delete('/:slug', projectController.delete);

module.exports = router;
