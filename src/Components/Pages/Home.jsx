import "../Font";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../Form";
import List from "../List";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
}));
function Home() {
  const formShema = yup.object().shape({
    information: yup.string().required("User Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formShema),
  });
  const [isList, setIsList] = useState(false);
  const onSubmitFunction = (data) => {
    setIsList(true);
    console.log(data);
  };
  const classe = useStyles();

  return (
    <Grid className={classe.root} container spacing={1}>
      <Grid item xs={12} className={classe.rootContainer}>
        <Form
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmitFunction={onSubmitFunction}
        />
        {isList && <List />}
      </Grid>
    </Grid>
  );
}
export default Home;
