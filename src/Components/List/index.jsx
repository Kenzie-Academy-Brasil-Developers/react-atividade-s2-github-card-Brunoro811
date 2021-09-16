import "../Font";
import { Grid } from "@material-ui/core";
import Card from "../Card";
function List({ arrRepo }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        {arrRepo.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </Grid>
    </Grid>
  );
}
export default List;
