import { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    return (
        <ThemeContext.Provider value={ {color:'danger', btnColor: 'danger'} }>
            { children }
        </ThemeContext.Provider>
    )

}