import "./MobileScreen.component.scss";
import PropTypes from "prop-types";

import Box from "@kiwicom/orbit-components/lib/Box";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";
import { Loading } from "@kiwicom/orbit-components";

export default function MobileScreen(props) {
  return (
    <Box
      className="MobileScreen"
      padding="medium"
      height="full"
      position="relative"
      display="flex"
      direction="column"
    >
      <h3>Number clicked:</h3>
      {props.handleKeyPressed}
      <h3>Result Combinations:</h3>
      <Box height="55vh" overflow="scroll">
        {props.loading && <Loading />}
        <List>
          {props.combinations.map((item, index) => (
            <ListItem type="primary" key={item} icon={index + 1}>
              {item}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

MobileScreen.propTypes = {
  handleKeyPressed: PropTypes.array.isRequired,
  combinations: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};
