// MainSelector.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import WebDevWindow from "./WebDevWindow.js";
import DiscordWindow from "./DiscordWindow.js";
import RequestWindow from "./RequestWindow.js";

function MainSelector(){
    const [hovered, setHovered] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [isUnderlined, setUnderline] = useState(null);

    const panels = [
        <div></div>,
        <div ><WebDevWindow></WebDevWindow></div>,
        <div ><DiscordWindow></DiscordWindow></div>,
        <div ><RequestWindow></RequestWindow></div>,
    ];
    
    const positions = {
        0: { x: "0"},
        1: { x: "-10%"},
        2: { x: "-20%"},
        3: { x: "-30%"}
    }

    const handleWeb = () => {
        setUnderline("0");
        setActiveTab(1);
    }

    const handleDisc = () => {
        setUnderline("1");
        setActiveTab(2);
    }

    const handleReq = () => {
        setUnderline("2");
        setActiveTab(3);
    }

    const styles = {
        main: {
            margin: "0",
            padding: "0",
            width: "100%",
            height: "700px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
        },
        selector: {
            width: "90%",
            justifyContent: "space-between",
            padding: "10% 0% 0% 0%",
            margin: "0% 5% 0% 5%",
            alignItems: "center",
            display: "flex",
        },
        webButton: {
            background: "none",
            border: "none",
            padding: "0",
            font: "inherit",
            color: hovered === 0 ? "grey" : "white",
            borderBottom: isUnderlined === "0" ? hovered === 0 ? "1px solid grey" : "1px solid white" : "none",
            textDecoration: isUnderlined === "0" ? "underline" : "none",
            textDecorationStyle: isUnderlined === "0" ? "solid" : "none",
            cursor: "pointer",
            fontFamily: "Courier",
            fontSize: "20px",
            fontWeight: "bold",
        },
        discButton: {
            background: "none",
            border: "none",
            padding: "0",
            font: "inherit",
            color: hovered === 1 ? "grey" : "white",
            borderBottom: isUnderlined === "1" ? hovered === 1 ? "1px solid grey" : "1px solid white" : "none",
            textDecoration: isUnderlined === "1" ? "underline" : "none",
            textDecorationStyle: isUnderlined === "1" ? "solid" : "none",
            cursor: "pointer",
            fontFamily: "Courier",
            fontSize: "20px",
            fontWeight: "bold",
        },
        reqButton: {
            background: "none",
            border: "none",
            padding: "0",
            font: "inherit",
            color: hovered === 2 ? "grey" : "white",
            borderBottom: isUnderlined === "2" ? hovered === 2 ? "1px solid grey" : "1px solid white" : "none",
            textDecoration: isUnderlined === "2" ? "underline" : "none",
            textDecorationStyle: isUnderlined === "2" ? "solid" : "none",
            cursor: "pointer",
            fontFamily: "Courier",
            fontSize: "20px",
            fontWeight: "bold",
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.selector}>
                <div style={styles.webButton} onClick={handleWeb} onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)}>Web Development</div>
                <div style={styles.discButton} onClick={handleDisc} onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)}>Discord Bots</div>
                <div style={styles.reqButton} onClick={handleReq} onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(null)}>Make A Request</div>
            </div>

            <motion.div
                    animate={{ x: `-${activeTab * 100}%` }}
                    transition={{ type: "tween", duration: 0.6 }}
                    style={{
                      display: "flex",
                      width: `${panels.length / 4 * 100}%`,
                      height: "100%"
                    }}
                  >
                    {panels.map((panel, i) => (
                        <div key={i} style={{
                            flex: "0 0 100%",
                            height: "100%"
                        }}>
                            {panel}
                        </div>
                        ))}
            </motion.div>

        </div>
    )
}

export default MainSelector;