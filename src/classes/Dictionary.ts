import { readFileSync } from "fs";
import path from "path";

class Dictionary {
  #filePath: string;
  #lower_words: string[];
  constructor() {
    this.#filePath = path.resolve(__dirname, "../../data/Viet74K.txt");

    const data = readFileSync(this.#filePath, "utf-8");
    this.#lower_words = data.toLowerCase().split("\r\n");
  }

  has(word: string): boolean {
    if (!word) return false;
    return this.#lower_words.indexOf(word.toLowerCase()) > -1;
  }

  random(): string {
    return this.#lower_words[
      Math.floor(Math.random() * this.#lower_words.length)
    ];
  }
}

const dictionary = new Dictionary();

export { dictionary };
