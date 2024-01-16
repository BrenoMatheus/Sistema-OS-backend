import { Router } from "express";

import { EquipmentController, TechnicianController } from "./../controllers";
import { ItemController } from "../controllers/items";

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

// route Item
router.get(
  "/items",
  ItemController.getAllValidation,
  ItemController.getAll
);
router.post(
  "/items",
  ItemController.createValidation,
  ItemController.create
);
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

export { router };
