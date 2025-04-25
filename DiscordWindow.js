// DiscordWindow.js
import React, { useState } from "react";
import Card from "./Card.js";
import testImage from "./assets/pfp2.jpg";
import LiveFront from "./assets/Live/front.png";
import ClipsFront from "./assets/clips/front.png";

function DiscordWindow(){
    const styles = {
        discWindow: {
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
        <div style={styles.discWindow}>  
            <Card style={styles.cards} title="Going Live Reporter" imageFront={LiveFront} description="Are you not affiliate yet on Twitch? Do you just want a bot
            that you can control yourself and adjust the messaging on, to go into multiple discord channels, or say differing messages? This is the tool for you!" 
            link="https://google.com"></Card>
            <Card style={styles.cards} title="Clips Reporter" imageFront={ClipsFront} description="Do you want your clips to be posted directly into your discord channel?
            Do you want some of your clips to go directly to a community discord? This is the tool for you!" link="https://google.com"></Card>
            <Card style={styles.cards} title="Want a custom bot?" imageFront={testImage} description="Do you have an idea for your own discord bot? Feel free to contact me
            and we can see how to make your dream a reality!" link="https://google.com"></Card>
     </div>
    )
}

export default DiscordWindow;