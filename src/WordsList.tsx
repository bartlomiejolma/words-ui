import { List, ListItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchWords, Word, Result } from "./api";

const WordsList = () => {
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
};

export default WordsList;
