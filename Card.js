// Card.js
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Card({title, description, imageFront, imageBack, link}){
    const [isHovered, setIsHovered] = useState(false);
    const [isFlipped, setFlipped] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    const handleClick = (e) => {
        setFlipped(!isFlipped);
        e.stopPropagation();
    }

    const handleLinkClick = (e) => {
        window.open(link);
        e.stopPropagation();
    }

    const styles = {
        title: {
            color: "white",
            fontSize: "2em",
        },
        cardFront: {
            height: "300px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            border: "2px solid black",
            borderRadius: "10px",
            backgroundImage: "url( " + imageFront + ")",
            backgroundSize: "cover",
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1.0)",
            color: "black",
            transformStyle: "preserve-3d",
            cursor: "pointer",
            fontFamily: "Courier",
            fontSize: "15px",
        },
        cardBack: {
            height: "300px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            border: "2px solid black",
            borderRadius: "10px",
            backgroundImage: "url( " + imageBack + ")",
            backgroundSize: "cover",
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1.0)",
            color: "black",
            transformStyle: "preserve-3d",
            cursor: "pointer",
            fontFamily: "Courier",
            fontSize: "15px",
        },
        image: {
            width: "10%",
            height: "10%",
        },
        text: {
            color: "white",
        },
        buttonFlip: {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: linkHovered ? "grey" : "black",
            fontFamily: "Courier",
            fontSize: "15px",
        },
        descriptionText: {
            margin: "5% 5% 5% 5%",
        }
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"
        cardStyles={{front: {backfaceVisibility: "hidden"}, back: {backfaceVisibility: "hidden"}}}>

            <div style={styles.cardFront} onClick={handleClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <h3>{title}</h3>
            </div>

            <div onClick={handleClick} style={styles.cardBack} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <h3 style={styles.descriptionText}>{description}</h3>
                <div onClick={handleLinkClick} style={styles.buttonFlip} onMouseEnter={() => setLinkHovered(true)} onMouseLeave={() => setLinkHovered(false)}>Check it out! ➡</div>
            </div>

        </ReactCardFlip>
    )
    
}

export default Card;