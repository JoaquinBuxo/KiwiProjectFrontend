import './MobileKey.component.scss';
import Button from "@kiwicom/orbit-components/lib/Button";

export default function MobileKey(props) {

    return (
        <div className="MobileKey">
            { 
                props.currentKey == '' ? <button className="keyButton" value={props.currentKey}>{props.key}{props.currentKey}</button> :
                props.currentKey == 'RESET' ? <button className="keyButton keyButtonCriticalColor" onClick={props.keyReset} value={props.currentKey}>{props.key}{props.currentKey}</button> :
                props.currentKey == 'ENTER' ? <button className="keyButton keyButtonPrimaryColor" onClick={props.keyEnter} value={props.currentKey}>{props.key}{props.currentKey}</button> :
                props.currentKey == 'FILTER' ? <button className="keyButton keyButtonSecondaryColor" onClick={props.keyFilter} value={props.currentKey}>{props.key}{props.currentKey}</button> :
                <button className="keyButton keyButtonSecondaryColor" onClick={props.keyPressed} value={props.currentKey}>{props.currentKey}</button>
            }
        </div> 
    );
}