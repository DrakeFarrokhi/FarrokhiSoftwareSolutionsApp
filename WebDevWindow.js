// WebDevWindow.js
import React, { useState } from "react";
import Card from "./Card.js";
import pixelFront from "./assets/PixelArtCreator/front.png";
import pixelBack from "./assets/PixelArtCreator/back.png";
import BHFront from "./assets/BHFireplace/front.png";
import BHBack from "./assets/BHFireplace/back.png";
import ReqFront from "./assets/request/front.png";
import ReqBack from "./assets/request/back.png";

function WebDevWindow(){
    const styles = {
        webdevWindow: {
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
        <div style={styles.webdevWindow}>
            <Card style={styles.cards} title="Pixel Art Creator" imageFront={pixelFront} imageBack={pixelBack} description="I made a simple website that serves as a convenient tool to
            make and download pixel art for indie game development or simply for fun. The website has features such as: a resizeable canvas, convenient and intuitive
            color changing options, a transparent initial background, and of course a button to conveniently download your masterpiece!" link="https://google.com"></Card>
            <Card style={styles.cards} title="Black Hills Fireplace Website" imageFront={BHFront} imageBack={BHBack} description="I made a website for my father to help support his business 
            involved in installing eletric fireplaces - contact him if you'd like more information!" link="https://google.com"></Card>
            <Card style={styles.cards} title="Need a Website?" imageFront={ReqFront} imageBack={ReqBack} description="Interested in having your own website and the support to host
            it off your own infastructure OR in the cloud?! Feel free to contact me and we can discuss how we can make your dream a reality!" 
            link="https://google.com"></Card>
        </div>
    )
}

export default WebDevWindow;