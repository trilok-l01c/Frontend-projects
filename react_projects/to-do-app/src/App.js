import { useState, useEffect, useRef } from "react";

function App() {
    const [text, setText] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div
            className="App"
            style={{
                width: "90vmax",
                height: "40vmin",
                borderRadius: "4px",
                backgroundColor: "#ea6456",
                margin: "100px auto",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <input
                style={{
                    width: "150px",
                    height: "30px",
                    textAlign: "center",
                }}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                ref={inputRef}
            />
            <p>The text is {text}</p>
            <PaletteGenerator />
        </div>
    );
}

function PaletteGenerator() {
    const [colors, setColors] = useState([]);
    return (
        <div className="palette">
            <button
                onChange={() => {
                    setColors(
                        {
                            id: crypto.randomUUID(),
                            hex: `#${Math.floor(Math.random() * 16777215)
                                .toString(16)
                                .padStart(6, 0)}`,
                        },
                        ...colors
                    );
                }}
            >
                Generate
            </button>
            <div>
                {colors.map((color) => {
                    return (
                        <div
                            key={color.id}
                            style={{
                                backgroundColor: color.hex,
                                width: "100px",
                                height: "100px",
                                margin: "5px",
                            }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
