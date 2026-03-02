import "./snake-grid.style.css"
import {useEffect, useState} from "react";

function SnakeGrid() {
    const grid = 15
    const [direction, setDirection] = useState("right")
    const [SnakeHeadX, setSnakeHeadX] = useState(4);
    const [SnakeHeadY, setSnakeHeadY] = useState(8);
    const [lastKey, setLastKey] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setLastKey(e.key);

            if (e.key === "ArrowRight") {
                setDirection("right");
            } else if (e.key === "ArrowLeft") {
                setDirection("left");
            } else if (e.key === "ArrowUp") {
                setDirection("up");
            } else if (e.key === "ArrowDown") {
                setDirection("down");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        const tickMs = 200;
        const id = setInterval(() => {
            setSnakeHeadX(x => {
                if (direction === "left") return x - 1 < 1 ? grid : x - 1;
                if (direction === "right") return x + 1 > grid ? x : x + 1;
                return x;
            });
            setSnakeHeadY(y => {
                if (direction === "up") return y - 1 < 1 ? grid : y - 1;
                if (direction === "down") return y + 1 > grid ? y : y + 1;
                return y;
            });
        }, tickMs);

        return () => clearInterval(id);
    }, [direction, grid]);

    return (
        <div className={"snake-grid"}>
            <div className={"snake-body"} style={{gridColumn: "3", gridRow: "8"}}></div>
            <div className={"snake-head"} style={{gridColumn: SnakeHeadX, gridRow: SnakeHeadY}}></div>
        </div>
    )
}

export default SnakeGrid;