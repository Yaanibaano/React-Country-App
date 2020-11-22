// ActionTypes
const ChangeMode = "CHANGE_MODE";
const ChangeRegion = "CHANGE_REGION";
const ChangeSearch = "CHANGE_SEARCH";
const CountriesLoading = "COUNTRIES_LOADING";
const loadCountries = "LOAD_COUNTRIES";

// ActionCreators

export const fetchCountries = () => (dispatch) => {
    dispatch(countriesLoading())
    fetch("https://restcountries.eu/rest/v2/all")
        .then((body) => body.json())
        .then((data) => dispatch(addCountries(data)))
    
}

export const addCountries = (countries) => ({
    type: loadCountries,
    payload: countries
});

export const countriesLoading = () => ({
    type: CountriesLoading,
})

export const change_region = (name) => {
    return {
        type: ChangeRegion,
        payload: name
    }
}

export const change_Mode = () => {
    return {
        type: ChangeMode,
    }
}

export const change_search = (item) => {
    return {
        type: ChangeSearch,
        payload: item
    }
}