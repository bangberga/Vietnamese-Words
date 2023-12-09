import { Router } from "express";

import { getAllWords, hasWord, randomWord } from "../controllers/dictionary";

const router = Router();

router.route("/").get(getAllWords);
router.route("/hasWord").get(hasWord);
router.route("/randomWord").get(randomWord);

export default router;
