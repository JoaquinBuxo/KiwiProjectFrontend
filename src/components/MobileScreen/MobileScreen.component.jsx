import "./MobileScreen.component.scss";
import Box from "@kiwicom/orbit-components/lib/Box";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";

export default function MobileScreen(props) {
  return (
    <div className="MobileScreen">
      <Box width="100vw" padding="medium" borderRadius="normal">
        <h3>Number clicked:</h3>
        {props.handleKeyPressed}
        <h3>Result Combinations:</h3>
        <Box height="50vh" overflow="scroll">
          <List>
            {props.combinations.map((item, index) => (
              <ListItem
                type="primary"
                key={item}
                icon={index + 1}
                overflow="scroll"
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </div>
  );
}
