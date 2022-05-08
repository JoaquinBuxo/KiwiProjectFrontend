import "./App.scss";
import MobileContainer from "./components/MobileContainer/MobileContainer.component";
import ResultContainer from "./components/ResultContainer/ResultContainer.component";
import Box from "@kiwicom/orbit-components/lib/Box";
import Grid from "@kiwicom/orbit-components/lib/utils/Grid";

function App() {
  return (
    <div className="App">
      <Grid columns="repeat(2, 1fr)" columnGap="10px" className="grid-features">
        <Box display="flex" justify="center" align="center">
          <MobileContainer />
        </Box>
        <Box display="none" justify="center" align="center">
          <ResultContainer />
        </Box>
      </Grid>
    </div>
  );
}

export default App;
