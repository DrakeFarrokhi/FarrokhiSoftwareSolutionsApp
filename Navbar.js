// Navbar.js
import React, { useState } from "react";
import logo from "./assets/logo.png";
import metal from "./assets/metal2.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation().pathname;
    const [hovered, setHovered] = useState(null);
    const styles = {
        Navbar: {
            position: "fixed",
            width: "100%",
            padding: "0",
            margin: "0",
            backgroundImage: "url(" + metal + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderBottom: "4px solid black",
        },
        navbarItems: {
            justifyContent: "space-between",
            display: "flex",
        },
        logo: {
            width: "4%",
            height: "4%",
            margin: "0% 1% 0% 1%",
            padding: "1% 0% 1% 0%"
        },
        links: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        homeLink: {
            transition: "transform 0.3s ease",
            transform: hovered === 0 ? "scale(1.1)" : "scale(1.0)",
            textDecoration: "none",
            color: "white",
            fontSize: "1.5em",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            margin: "0% 15% 0% 15%",
        },
        contactLink: {
            transition: "transform 0.3s ease",
            transform: hovered === 1 ? "scale(1.1)" : "scale(1.0)",
            textDecoration: "none",
            color: "white",
            fontSize: "1.5em",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            margin: "0% 15% 0% 15%",
        },
        reviewsLink: {
            transition: "transform 0.3s ease",
            transform: hovered === 2 ? "scale(1.1)" : "scale(1.0)",
            textDecoration: "none",
            color: "white",
            fontSize: "1.5em",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            margin: "0% 15% 0% 15%",
        },
    };

    return (
        <nav style={styles.Navbar}>

            <div style={styles.links}>

                <img src={logo} alt="Logo" style={styles.logo}/>

                {location !== "/" && (
                    <Link style={styles.homeLink} to="/" onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)}>Home</Link>
                )}
                {location !== "/contact" &&(
                    <Link style={styles.contactLink} to="/contact" onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)}>Contact</Link>
                )}
                {location !== "/reviews" && (
                    <Link style={styles.reviewsLink} to="/reviews" onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(null)}>Reviews</Link>
                )}

            </div>
        </nav>
    );
}

export default Navbar;