const themeReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload }
        case "CHANGE_MODE":
            return { ...state, mode: action.payload }
        default:
            return state
    }
}

export default themeReducer;