import { Router } from "express";
import { createLead } from "../controllers/leads";

import { findUser, updateUser } from "../controllers/users";

export default (router: Router) => {
  router.patch("/users/:id", updateUser);
  router.post("/users/:id/leads", createLead);
  router.get("/users/find/:keyword", findUser);
};
