import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import './ThemeSelector.css';

import lightIcon from '../assets/light.svg'
import darkIcon from '../assets/dark.svg'

const themeColors = ["warning","danger","primary","success"];

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useContext(ThemeContext);

    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark")
    }

    return (
        <div className="container theme-selector">
            <div className="mode-toggle">
                <img src={ mode === "dark" ? darkIcon : lightIcon } 
                alt="dark light mode" 
                onClick={toggleMode} />
            </div>
            <div className="theme-links">
                {
                    themeColors.map(color => (
                        <span
                            key={color}
                            className={`bg-${color}`}
                            onClick={() => changeColor(color)}></span>
                    ))
                }
            </div>
        </div>
    )
}