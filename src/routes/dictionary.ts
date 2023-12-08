import { Router } from "express";

import { hasWord, randomWord } from "../controllers/dictionary";

const router = Router();

router.route("/hasWord").get(hasWord);
router.route("/randomWord").get(randomWord);

export default router;
