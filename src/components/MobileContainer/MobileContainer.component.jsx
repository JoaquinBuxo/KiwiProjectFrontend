import "./MobileContainer.component.scss";
import { useState } from "react";
import MobileScreen from "../MobileScreen/MobileScreen.component";
import MobileKeyboard from "../MobileKeyboard/MobileKeyboard.component";
import Box from "@kiwicom/orbit-components/lib/Box";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import { Badge, Stack } from "@kiwicom/orbit-components";

export default function MobileContainer() {
  const [wordCombinations, setWordCombinations] = useState([]);
  const [numPressed, setNumPressed] = useState([]);
  const [error, setError] = useState();
  const [filterInfo, setFilterInfo] = useState();
  const dictionary = ["kiwi", "travel", "ahoj", "plane", "train", "hola"];

  const getCombinations = async () => {
    const numResult = numPressed.join("");
    try {
      const request = await fetch(
        `https://kiwi-project-backend.vercel.app/api/t9/${numResult}`
      );
      const response = await request.json();
      setWordCombinations(response);
    } catch (err) {
      setError(err.message || "unexpected error");
    }
  };

  const handleKeyPressed = (number) => {
    setNumPressed((numPressed) => [...numPressed, number]);
  };

  const reset = () => {
    setNumPressed("");
    setWordCombinations([]);
  };

  const filterWords = () => {
    setWordCombinations(
      wordCombinations.filter((word) => dictionary.includes(word))
    );
    setFilterInfo(true);
  };

  return (
    <Box className="MobileContainer" borderRadius="normal">
      {error && (
        <Alert type="critical" icon>
          Something went wrong: {error}
        </Alert>
      )}
      {filterInfo && (
        <Alert
          type="info"
          icon
          title="Filter Information"
          closable="true"
          spaceAfter="-20px"
          onClose={() => setFilterInfo(false)}
        ><Box>
          <p>Right now the filter only works with some words</p>
          <Stack spacing="small" inline="true">
          {dictionary.map((element) => (
            <Badge>{element}</Badge>
          ))}
          </Stack>
          </Box>
        </Alert>
      )}
      <MobileScreen
        handleKeyPressed={numPressed}
        combinations={wordCombinations}
      />
      <MobileKeyboard
        onNumKeyPressed={handleKeyPressed}
        onEnter={getCombinations}
        onReset={reset}
        onFilter={filterWords}
      />
    </Box>
  );
}
