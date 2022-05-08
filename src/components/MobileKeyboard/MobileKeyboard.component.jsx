import './MobileKeyboard.component.scss';
import PropTypes from 'prop-types';

import Grid from "@kiwicom/orbit-components/lib/utils/Grid";
import Button from "@kiwicom/orbit-components/lib/Button";

export default function MobileKeyboard(props) {
    const keyPhone = [
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ];

    return (
        <Grid className="MobileKeyboard"
            columns="repeat(3, 1fr)"
            rows="repeat(4, 1fr)"
            rowGap="5px"
            columnGap="5px"
        >        
            {keyPhone.map((helperChars, index) => <Button type="secondary" key={index} onClick={() => props.onNumKeyPressed(index+1)}>{index+1}<p className="helper-chars">{helperChars}</p></Button>)}
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