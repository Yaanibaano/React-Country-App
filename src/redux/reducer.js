export const initalState = {
    isLoading: false,
    countries: [],
    region: "All",
    darkMode: true,
    search: "",
}

export const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case "CHANGE_REGION":
            var newState = { ...state, region: action.payload }
            return newState;
        case "CHANGE_MODE":
            var newModeState = { ...state, darkMode: !state.darkMode }
            return newModeState
        case "CHANGE_SEARCH": {
            console.log("changing")
            var newSearchState = { ...state, search: action.payload };
            return newSearchState
        }
        case "COUNTRIES_LOADING": {
            console.log("countries loading")
            var newloadState = { ...state, isLoading: true };
            return newloadState
        }
        case "LOAD_COUNTRIES": {
            var newCountrystate = { ...state, countries: action.payload, isLoading: false }
            return newCountrystate;
        }
        default:
            return state;
    }
}