import { Router } from "express";

import {
  EquipmentController,
  OrderController,
  TechnicianController,
  ItemController,
  ItemofLineController,
} from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, DEV!");
});

// route Technician
router.get(
  "/technicians",
  TechnicianController.getAllValidation,
  TechnicianController.getAll
);
router.post(
  "/technicians",
  TechnicianController.createValidation,
  TechnicianController.create
);
router.get(
  "/technicians/:id",
  TechnicianController.getByIdValidation,
  TechnicianController.getById
);
router.put(
  "/technicians/:id",
  TechnicianController.updateByIdValidation,
  TechnicianController.updateById
);
router.delete(
  "/technicians/:id",
  TechnicianController.deleteByIdValidation,
  TechnicianController.deleteById
);

// route Item
router.get("/items", ItemController.getAllValidation, ItemController.getAll);
router.post("/items", ItemController.createValidation, ItemController.create);
router.get(
  "/items/:id",
  ItemController.getByIdValidation,
  ItemController.getById
);
router.put(
  "/items/:id",
  ItemController.updateByIdValidation,
  ItemController.updateById
);
router.delete(
  "/items/:id",
  ItemController.deleteByIdValidation,
  ItemController.deleteById
);

// route Equipment
router.get(
  "/equipments",
  EquipmentController.getAllValidation,
  EquipmentController.getAll
);
router.post(
  "/equipments",
  EquipmentController.createValidation,
  EquipmentController.create
);
router.get(
  "/equipments/:id",
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
  EquipmentController.deleteByIdValidation,
  EquipmentController.deleteById
);

// route Order
router.get("/orders", OrderController.getAllValidation, OrderController.getAll);
router.post(
  "/orders",
  OrderController.createValidation,
  OrderController.create
);
router.get(
  "/orders/:id",
  OrderController.getByIdValidation,
  OrderController.getById
);
router.put(
  "/orders/:id",
  OrderController.updateByIdValidation,
  OrderController.updateById
);
router.delete(
  "/orders/:id",
  OrderController.deleteByIdValidation,
  OrderController.deleteById
);

// route ItemofLine
router.get(
  "/itemoflines",
  ItemofLineController.getAllValidation,
  ItemofLineController.getAll
);
router.post(
  "/itemoflines",
  ItemofLineController.createValidation,
  ItemofLineController.create
);
router.get(
  "/itemoflines/:id",
  ItemofLineController.getByIdValidation,
  ItemofLineController.getById
);
router.put(
  "/itemoflines/:id",
  ItemofLineController.updateByIdValidation,
  ItemofLineController.updateById
);
router.delete(
  "/itemoflines/:id",
  ItemofLineController.deleteByIdValidation,
  ItemofLineController.deleteById
);

export { router };
