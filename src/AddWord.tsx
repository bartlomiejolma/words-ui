import { Box, Button, TextField } from "@material-ui/core";
import React from "react";

import { useForm } from "react-hook-form";

interface FormData {
  word: string;
}

const makeSavingRequest = (word: string) => Promise.resolve(word);
const AddWord = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit = handleSubmit(async ({ word }) => {
    await makeSavingRequest(word);
    reset();
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
