import './MobileContainer.component.scss';
import { useState } from "react";
import MobileScreen from '../MobileScreen/MobileScreen.component';
import MobileKeyboard from '../MobileKeyboard/MobileKeyboard.component';
import Box from "@kiwicom/orbit-components/lib/Box";

export default function MobileContainer() {

    const [wordCombinations, setWordCombinations] = useState('');
    const [numPressed, setNumPressed] = useState([]);
    const dictionary = ['kiwi', 'ahoj', 'plane', 'train', 'hola']

    const getCombinations = async () => {
        const numResult = numPressed.join("");
        const request = await fetch(`http://localhost:3001/t9/${numResult}`);
        const response = await request.json();
        setWordCombinations(response);
    };

    const handleKeyPressed = (number) => {
        setNumPressed(numPressed => [...numPressed, number]);
    }

    const reset = () => {
        setNumPressed('');
        setWordCombinations('');
    }

    const filterWords = () => {
        setWordCombinations( wordCombinations.filter( word => dictionary.includes(word)));
    }


    return (
        <Box className="MobileContainer" borderRadius="normal" >   
            <MobileScreen handleKeyPressed={numPressed} combinations={wordCombinations}/>
            <MobileKeyboard handleKeyPressed={handleKeyPressed} getCombinations={getCombinations} reset={reset} filterWords={filterWords}/>           
        </Box>
    );
}