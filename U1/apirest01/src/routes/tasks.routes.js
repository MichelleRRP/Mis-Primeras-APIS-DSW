const {Router} = require("express");

const controller = require("../controllers/tasks.controller");

const router = Router();

router.get("/", controller.findAll);
router.post("/", controller.addTask);
router.delete("/:id", controller.removeTask);

router.get("/:id", controller.reviewTask); // Consultar tarea por id

router.put("/:id/title", controller.updateTitle);// Actualizar título de una tarea

router.patch("/:id/completed", controller.updateCompleted);// Actualizar estado completed de una tarea


module.exports = router;