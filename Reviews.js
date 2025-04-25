// Reviews.js
import React from "react";
import SelfIntroduction from "./SelfIntroduction";

function Contact() {
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
            <SelfIntroduction/>
            <div>
                <h3></h3>
            </div>
        </div>
    )
}

export default Contact;