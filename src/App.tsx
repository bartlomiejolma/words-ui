import React, { useEffect, useState } from "react";
import { List, ListItem } from "@material-ui/core";
import axios from "axios";

interface Result {
  data: Array<Word>;
}

interface Word {
  name: string;
  id: number;
}
const fetchWords = (): Promise<Result> =>
  axios.get("http://localhost:5000/words");

function App() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    fetchWords().then((result: Result) => setWords(result.data));
  }, []);
  return (
    <List>
      {words.map((word: Word) => (
        <ListItem key={word.id}>{word.name}</ListItem>
      ))}
    </List>
  );
}

export default App;
