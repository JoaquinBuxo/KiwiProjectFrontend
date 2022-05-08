import "./MobileScreen.component.scss";
import Box from "@kiwicom/orbit-components/lib/Box";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";

export default function MobileScreen(props) {
  return (
    <div className="MobileScreen">
      <Box
        width="100vw"
        height="60vh"
        padding="medium"
        borderRadius="normal"
        background="productLight"
      >
        <h3>Number clicked:</h3>
        {props.handleKeyPressed}
        <h3>Result Combinations:</h3>
        <List>
          {props.combinations.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
