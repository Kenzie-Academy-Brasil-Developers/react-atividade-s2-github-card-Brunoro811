import "../Font";
import { TextField, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "95%",
    maxWidth: "400px",
    padding: "10px",
    boxSizing: "border-box",
    margin: "0 auto",
    marginTop: "10px",
  },
  forRow: {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    maxWidth: "280px",
    margin: "0 auto",
  },
  alert: {
    color: "red",
    marginTop: "10px",
  },
}));
function Form() {
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

  const onSubmitFunction = (data) => console.log(data);
  const classe = useStyles();
  return (
    <Grid className={classe.root} container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classe.container}>
          <form onSubmit={handleSubmit(onSubmitFunction)} autoComplete="off">
            <h3>API Git Hub</h3>
            <Grid className={classe.forRow} item xs={12}>
              <TextField
                className={classe.input}
                {...register("information")}
                id="outlined-basic"
                label="User/Organization and Repository"
                variant="outlined"
              />
              {errors.information && (
                <span className={classe.alert}>
                  {errors.information.message}
                </span>
              )}
            </Grid>
            <Grid className={classe.forRow} item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Seach
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Form;
