import './MobileKeyboard.component.scss';

import Grid from "@kiwicom/orbit-components/lib/utils/Grid";

export default function MobileKeyboard(props) {
    const numKeys = [...Array(9).keys()];

    return (
        <Grid className="MobileKeyboard"
            columns="repeat(3, 1fr)"
            rows="repeat(4, 1fr)"
            rowGap="5px"
            columnGap="5px"
        >        
            {numKeys.map(key => <button className="keyButton keyButtonSecondaryColor" key={key} onClick={() => props.handleKeyPressed(key+1)}>{key+1}</button>)}
            <button className="keyButton keyButtonCriticalColor" onClick={props.reset} >RESET</button>
            <button className="keyButton keyButtonPrimaryColor" onClick={props.getCombinations} >ENTER</button>
            <button className="keyButton keyButtonSecondaryColor" onClick={props.filterWords} >FILTER</button>
        </Grid> 
    );
}