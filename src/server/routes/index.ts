import { Router } from "express";

import {
  TechnicianController,
} from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, DEV!");
});

router.post(
  "/technicians",
  TechnicianController.createValidation,
  TechnicianController.create
);

export { router };