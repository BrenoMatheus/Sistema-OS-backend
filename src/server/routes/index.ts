import { Router } from "express";

import {
  TechnicianController,
} from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, DEV!");
});

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


export { router };