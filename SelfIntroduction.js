// SelfIntroduction.js
import './App.css';
import selfie from "./assets/selfie.png.png";
import SplitFlap from "./SplitFlap.js"

function SelfIntroduction() {
    const styles = {
        selfIntro: {
            padding: "10% 0 0 10%",
            display: "flex",
            flexDirection: "row",
            width: "80%",
            justifyContent: "left",
            alignItems: "left",
        },
        selfie: {
            height: "10%",
            width: "10%",
        },
        selfDescription: {
            color: "white",
            padding: "0 0 0 1.5%",
            display: "flex",
            alignItems: "center",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "Courier",
        }
    }

    return (
        <div style={styles.selfIntro}>
            <img src={selfie} style={styles.selfie}></img>
            <div style={styles.selfDescription}><SplitFlap message="Hello, my name is Drake ____________. I've worked as far from cook to IT specialist to general laborer/general 
            mechanic to management! If you can imagine it, I know something about it and can help in any way you see fit! I've been born, raised, and working
            in the Black _____ area since the second millennium and I've found my passion in computer science and software development but most importantly helping my
            neighbor!"></SplitFlap></div>
        </div>
    )
}

export default SelfIntroduction;