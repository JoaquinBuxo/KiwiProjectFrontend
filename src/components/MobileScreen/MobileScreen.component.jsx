import './MobileScreen.component.scss';
import Box from "@kiwicom/orbit-components/lib/Box";

export default function MobileScreen(props) {

    return (
        <div className="MobileScreen">
            <Box width="100vw" height="60vh" padding="medium" borderRadius="normal" background="productLight">
                <p className="screen-text"><b>Number clicked:</b><br/> {props.handleKeyPressed}</p>
                <p className="screen-text"><b>Result Combinations:</b><br/>{props.combinations}</p>
            </Box>      
        </div> 
    );
}