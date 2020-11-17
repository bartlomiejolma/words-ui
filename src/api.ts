import axios from "axios";

export interface Result {
  data: Array<Word>;
}

export interface Word {
  name: string;
  id: number;
}

export const fetchWords = (): Promise<Result> =>
  axios.get("http://localhost:5000/words");
