import './MobileKeyboard.component.scss';

import MobileKey from '../../components/MobileKey/MobileKey.component';

export default function MobileKeyboard(props) {

    const keys = [1,2,3,4,5,6,7,8,9,'*',0,'-'];

    return (
        <div className="MobileKeyboard">
            keyboard
            {keys.map( key => <MobileKey key={keys[key]} currentKey={key} keyPressed={props.checkCombinations} />)}
        </div> 
    );
}