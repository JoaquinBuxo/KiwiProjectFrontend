import "./MobileKeyboard.component.scss";
import PropTypes from "prop-types";

import Grid from "@kiwicom/orbit-components/lib/utils/Grid";
import Button from "@kiwicom/orbit-components/lib/Button";
import { ToastRoot, createToast } from "@kiwicom/orbit-components/lib/Toast";
import { Box } from "@kiwicom/orbit-components";

export default function MobileKeyboard(props) {
  const keyPhone = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  return (
    <Box className="MobileKeyboard" position="relative" bottom="0" width="full">
      <Grid
        columns="repeat(3, 1fr)"
        rows="repeat(4, 1fr)"
        rowGap="5px"
        columnGap="5px"
      >
        <ToastRoot dismissTimeout={2500} />
        <Button
          type="secondary"
          onClick={() => createToast("This button has no letters")}
        >
          1
        </Button>
        {keyPhone.map((helperChars, index) => (
          <Button
            type="secondary"
            key={index}
            onClick={() => props.onNumKeyPressed(index + 2)}
          >
            {index + 2}
            <p className="helper-chars">{helperChars}</p>
          </Button>
        ))}
        <Button type="critical" onClick={props.onReset}>
          RESET
        </Button>
        <Button type="primary" onClick={props.onEnter}>
          ENTER
        </Button>
        <Button type="secondary" onClick={props.onFilter}>
          FILTER
        </Button>
      </Grid>
    </Box>
  );
}

MobileKeyboard.propTypes = {
  onNumKeyPressed: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};
