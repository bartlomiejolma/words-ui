import { Box, Button, TextField } from "@material-ui/core";
import React from "react";

import { useForm } from "react-hook-form";

interface FormData {
  word: string;
}

const AddWord = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ word }) => {
    console.log(word);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box flexDirection="row">
        <TextField
          name="word"
          label="Word"
          inputRef={register}
          required={true}
        />
        <Button type="submit">Add Word</Button>
      </Box>
    </form>
  );
};

export default AddWord;
