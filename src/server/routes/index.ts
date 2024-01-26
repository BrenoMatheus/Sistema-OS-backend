import { Router } from "express";

import {
  EquipmentController,
  OrderController,
  TechnicianController,
  ItemController,
  ItemofLineController,
  UsersController,
} from "./../controllers";
import { ensureAuthenticated } from "../shared/middleware/EnsureAuthenticated";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, DEV!");
});

// route Technician
router.get(
  "/technicians",
  ensureAuthenticated,
  TechnicianController.getAllValidation,
  TechnicianController.getAll
);
router.post(
  "/technicians",
  ensureAuthenticated,
  TechnicianController.createValidation,
  TechnicianController.create
);
router.get(
  "/technicians/:id",
  ensureAuthenticated,
  TechnicianController.getByIdValidation,
  TechnicianController.getById
);
router.put(
  "/technicians/:id",
  ensureAuthenticated,
  TechnicianController.updateByIdValidation,
  TechnicianController.updateById
);
router.delete(
  "/technicians/:id",
  ensureAuthenticated,
  TechnicianController.deleteByIdValidation,
  TechnicianController.deleteById
);

// route Item
router.get("/items",ensureAuthenticated, ItemController.getAllValidation, ItemController.getAll);
router.post("/items",ensureAuthenticated, ItemController.createValidation, ItemController.create);
router.get(
  "/items/:id",
  ensureAuthenticated,
  ItemController.getByIdValidation,
  ItemController.getById
);
router.put(
  "/items/:id",
  ensureAuthenticated,
  ItemController.updateByIdValidation,
  ItemController.updateById
);
router.delete(
  "/items/:id",
  ensureAuthenticated,
  ItemController.deleteByIdValidation,
  ItemController.deleteById
);

// route Equipment
router.get(
  "/equipments",
  ensureAuthenticated,
  EquipmentController.getAllValidation,
  EquipmentController.getAll
);
router.post(
  "/equipments",
  ensureAuthenticated,
  EquipmentController.createValidation,
  EquipmentController.create
);
router.get(
  "/equipments/:id",
  ensureAuthenticated,
  EquipmentController.getByIdValidation,
  EquipmentController.getById
);
router.put(
  "/equipments/:id",
  EquipmentController.updateByIdValidation,
  EquipmentController.updateById
);
router.delete(
  "/equipments/:id",
  ensureAuthenticated,
  EquipmentController.deleteByIdValidation,
  EquipmentController.deleteById
);

// route Order
router.get("/orders",ensureAuthenticated, OrderController.getAllValidation, OrderController.getAll);
router.post(
  "/orders",
  ensureAuthenticated,
  OrderController.createValidation,
  OrderController.create
);
router.get(
  "/orders/:id",
  ensureAuthenticated,
  OrderController.getByIdValidation,
  OrderController.getById
);
router.put(
  "/orders/:id",
  ensureAuthenticated,
  OrderController.updateByIdValidation,
  OrderController.updateById
);
router.delete(
  "/orders/:id",
  ensureAuthenticated,
  OrderController.deleteByIdValidation,
  OrderController.deleteById
);

// route ItemofLine
router.get(
  "/itemoflines",
  ensureAuthenticated,
  ItemofLineController.getAllValidation,
  ItemofLineController.getAll
);
router.post(
  "/itemoflines",
  ensureAuthenticated,
  ItemofLineController.createValidation,
  ItemofLineController.create
);
router.get(
  "/itemoflines/:id",
  ensureAuthenticated,
  ItemofLineController.getByIdValidation,
  ItemofLineController.getById
);
router.put(
  "/itemoflines/:id",
  ensureAuthenticated,
  ItemofLineController.updateByIdValidation,
  ItemofLineController.updateById
);
router.delete(
  "/itemoflines/:id",
  ensureAuthenticated,
  ItemofLineController.deleteByIdValidation,
  ItemofLineController.deleteById
);

router.post(
  "/entrar",
  UsersController.signInValidation,
  UsersController.signIn
);
router.post(
  "/cadastrar",
  UsersController.signUpValidation,
  UsersController.signUp
);

export { router };