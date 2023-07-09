import { useState, useEffect } from "react";
const Square = () => {
    const maxValue = 256;
    const shadowOpacity = 0.3;
    const [rgbColor, setRgbColor] = useState({
        red: 0,
        green: 0,
        blue: 0
    });

    const [colorChanging, setColorChanging] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (colorChanging) {
                setRgbColor({
                    red: Math.floor(Math.random() * maxValue),
                    green: Math.floor(Math.random() * maxValue),
                    blue: Math.floor(Math.random() * maxValue)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [colorChanging]);

    const rgbCode = `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`;

    return (
        <div>
            <h2 style={{ position: "relative" }}>{rgbCode}</h2>
            <div
                style={{
                    position: "relative",
                    margin: "auto",
                    width: `${maxValue - 1}px`,
                    height: `${maxValue - 1}px`,
                    border: "2px solid black",
                    background: rgbCode,
                    borderRadius: "15px",
                    boxShadow: `5px 5px 2px rgba(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue}, ${shadowOpacity})`
                }}
                onMouseOver={() => setColorChanging(true)}
                onMouseLeave={() => setColorChanging(false)}
                onDoubleClick={() => setColorChanging(false)}
            ></div>
            <div>
                <p style={{ marginTop: "20px" }}>
                    {colorChanging
                        ? "Move the mouse outside of the square or double click over it to stop changing the color"
                        : "Place the mouse over the square"}
                </p>
            </div>
        </div>
    );
};
export default Square;
