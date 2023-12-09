import { Router } from "express";

import { getRoot } from "../controllers/root";

const router = Router();

router.route("/").get(getRoot);

export default router;
