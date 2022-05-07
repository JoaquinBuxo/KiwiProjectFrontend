import './MobileKey.component.scss';

export default function MobileKey(props) {

    return (
        <div className="MobileKey">
            <button onClick={props.keyPressed} value={props.currentKey}>{props.currentKey}</button>          
        </div> 
    );
}