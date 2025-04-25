// Home.js
import { react } from "react";
import MainSelector from "./MainSelector.js";
import SelfIntroduction from "./SelfIntroduction.js";


function Home() {
    const styles = {
        content: {
            margin: "0",
            padding: "0",
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom right, #007575,rgb(0, 70, 70)",
            flexDirection: "column",
            overflow: "hidden",
        }
    }
    
    return (
        <div style={styles.content}>
            <SelfIntroduction></SelfIntroduction>
            <MainSelector></MainSelector>
      </div>
    );
};

export default Home;