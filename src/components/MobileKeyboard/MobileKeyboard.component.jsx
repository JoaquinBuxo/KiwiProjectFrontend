import './MobileKeyboard.component.scss';
import PropTypes from 'prop-types';

import Grid from "@kiwicom/orbit-components/lib/utils/Grid";
import Button from "@kiwicom/orbit-components/lib/Button";

export default function MobileKeyboard(props) {
    const numKeys = [...Array(9).keys()];

    return (
        <Grid className="MobileKeyboard"
            columns="repeat(3, 1fr)"
            rows="repeat(4, 1fr)"
            rowGap="5px"
            columnGap="5px"
        >        
            {numKeys.map(key => <Button type="secondary" key={key} onClick={() => props.onNumKeyPressed(key+1)}>{key+1}</Button>)}
            <Button type="critical" onClick={props.onReset} >RESET</Button>
            <Button type="primary" onClick={props.onEnter} >ENTER</Button>
            <Button type="secondary" onClick={props.onFilter} >FILTER</Button>
        </Grid> 
    );
}

MobileKeyboard.propTypes = {
    onNumKeyPressed: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired
}