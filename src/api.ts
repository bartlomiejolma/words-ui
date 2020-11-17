import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://nest-words.herokuapp.com/"
    : "http://localhost:5000/";

const WORDS = `${API_URL}words`;
export interface Result {
  data: Array<Word>;
}

export interface Word {
  name: string;
  id: number;
}

export const fetchWords = (): Promise<Result> => axios.get(WORDS);
