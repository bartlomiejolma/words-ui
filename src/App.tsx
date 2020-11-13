import { Container } from "@material-ui/core";
import React from "react";
import TitleBar from "./TitleBar";
import WordsList from "./WordsList";

function App() {
  return (
    <>
      <TitleBar />
      <Container >
        <WordsList />
      </Container>
    </>
  );
}

export default App;
