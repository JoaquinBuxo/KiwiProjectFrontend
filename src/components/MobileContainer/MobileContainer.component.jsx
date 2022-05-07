import './MobileContainer.component.scss';
import { useState } from "react";
import MobileScreen from '../MobileScreen/MobileScreen.component';
import MobileKeyboard from '../MobileKeyboard/MobileKeyboard.component';

export default function MobileContainer() {

    const [wordCombination, setWordCombination] = useState();
    const [numPressed, setNumPressed] = useState();

    const checkCombinations = async () => {
        const response = await fetch("http://localhost:3001/t9/234").then((response) => response.json());
        setWordCombination(response);
    };

    let getKeyPressed = (event) => {
        const keyValue = event.target.value;
        setNumPressed([... numPressed, keyValue]);
    }

    return (
        <div className="MobileContainer">
            <MobileScreen />
            <MobileKeyboard checkCombinations={getKeyPressed} />
        </div>
    );
}