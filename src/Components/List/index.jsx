import "../Font";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  container: {
    width: "95%",
    maxWidth: "400px",
    padding: "10px",
    boxSizing: "border-box",
    margin: "0 auto",
  },
}));

function List() {
  const classe = useStyle();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classe.container}>
          <Grid item xs={12}>
            <p>texto</p>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default List;
