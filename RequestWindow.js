// RequestWindow.js
import React, { useState } from "react";
import Card from "./Card.js";
import testImage from "./assets/pfp2.jpg";

function RequestWindow(){
    const styles = {
        reqWindow: {
            justifyContent: "center",
            alignItems: "center",
            margin: "3% 10%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "reapeat(3, 1fr)",
            gap: "10%",
            justifyContent: "space-between"
        },
        cards: {
            margin: "1%",
            width: "25%",
        }
    }

    return (
        <div style={styles.reqWindow}>
            <div></div>  
            <Card style={styles.cards} title="Something Else?" imageFront={testImage} description="Need a general handy man that you think I could help you with?
            Feel free to contact me and we can see what we can arrange! I have skills in programming, low voltage electrical, networking, general construction, 
            and many other things! I've been an entrepeuner my whole life and there's not a single thing I haven't done - feel free to contact me!"
             link="https://google.com"></Card>
            <div></div>
         </div>
    )
}

export default RequestWindow;