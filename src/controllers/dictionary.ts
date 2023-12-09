import { RequestHandler } from "express";
import { dictionary } from "../classes/Dictionary";
import shuffle from "../utils/shuffle";

const getAllWords: RequestHandler = (req, res) => {
  const {
    query: { q, min, max },
  } = req;
  let response: string[] = [];
  let _min = 1;
  if (typeof min === "string") {
    const parsed = parseInt(min);
    _min = isNaN(parsed) ? _min : parsed;
  }
  let _max = 9;
  if (typeof max === "string") {
    const parsed = parseInt(max);
    _max = isNaN(parsed) ? _max : parsed;
  }
  dictionary.lower_words.forEach((word) => {
    const size = word.split(" ").length;
    if (size > _max || size < _min) return;
    response.push(word);
  });
  if (typeof q === "string" && q === "shuffle") shuffle(response);
  return res.json({ words: response });
};

const hasWord: RequestHandler = (req, res) => {
  const {
    query: { q },
  } = req;
  if (typeof q !== "string") return res.json({ has: false });
  return res.json({ has: dictionary.has(q) });
};

const randomWord: RequestHandler = (req, res) => {
  return res.json({ word: dictionary.random() });
};

export { getAllWords, hasWord, randomWord };
