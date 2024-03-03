import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { Menu } from "./components/Menu";
import { HomePage } from "./pages/Home";

export const App = () => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Menu value={value} setValue={setValue} />
        </Grid>
        {value === 0 ? <HomePage /> : null}
      </Grid>
    </>
  );
};

export default App;
