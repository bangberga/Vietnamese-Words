import { RequestHandler } from "express";
import { dictionary } from "../classes/Dictionary";

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

export { hasWord, randomWord };
