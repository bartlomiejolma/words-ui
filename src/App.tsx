import React, {useEffect, useState} from "react";
import { List, ListItem } from "@material-ui/core";

const fetchWords = ():Promise<Array<string>> => Promise.resolve(["first", "second"])
function App() {

  const [words, setWords] = useState<string[]>([])

  useEffect(()=> {
    fetchWords().then((result) => setWords(result))
  },[])
  return <List >
    {words.map((word)=> <ListItem>{word}</ListItem>)}
  </List>;
}

export default App;
