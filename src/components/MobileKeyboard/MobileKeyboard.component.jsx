import './MobileKeyboard.component.scss';

import MobileKey from '../../components/MobileKey/MobileKey.component';
import Grid from "@kiwicom/orbit-components/lib/utils/Grid";

export default function MobileKeyboard(props) {

    const keys = [1,2,3,4,5,6,7,8,9,'RESET','ENTER','FILTER'];

    return (
        <Grid className="MobileKeyboard"
            columns="repeat(3, 1fr)"
            rows="repeat(4, 1fr)"
            rowGap="5px"
            columnGap="5px"
        >
            {keys.map( (key, index) => <MobileKey key={index} currentKey={key} keyPressed={props.handleKeyPressed} keyEnter={props.getCombinations} keyReset={props.reset} keyFilter={props.filterWords}/>)}
        </Grid> 
    );
}