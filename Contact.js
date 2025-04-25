// Contact.js
import React from "react";
import SelfIntroduction from "./SelfIntroduction.js";

function Contact() {
    const styles = {
        content: {
            margin: "0",
            padding: "0",
            width: "100%",
            height: "1000px",
            background: "linear-gradient(to bottom right, #007575,rgb(0, 70, 70)",
            backgroundSize: "cover",
            flexDirection: "row",
            alignItems: "center",
        },
        box: {
            backgroundColor: "#ffefdd", // #fff6ec
            width: "80%",
            margin: "0 10% 20% 10%",
            alignItems: "center",
            justifyContent: "space-between",
            height: "40%",
            borderRadius: "10px",
            gridTemplateRows: "reapeat(2, 1fr)",
        },
        inquiry: {
            width: "35%",
            margin: "5% 5% 5% 5%",
            textFont: "Courier",
        },
        info: {
            textFont: "Courier",
            margin: "5% 5% 5% 5%",
            width: "35%",
        }
    }

    return (
        <div style={styles.content}>
            <SelfIntroduction/>
             <div style={styles.box}>
                <div style={styles.inquiry}>
                    <h3>Online Inquiry</h3>
                </div>
                <div style={styles.info}>
                    <h3>Contact Information</h3>
                </div>  
             </div>
        </div>
    )
}

export default Contact;