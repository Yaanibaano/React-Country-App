import React, { useEffect } from "react";
import {useHistory} from "react-router-dom"
import { Button } from "reactstrap";

const CustomLinks = ({text,mode}) => {
    const history = useHistory();
    const gobackHandle = () =>{
        history.goBack();
    }
    if (text === "Back") {
        return (
            <div className="shadow">
                <Button className={"btn "+(!mode?"btn-dark my-bg-2":"btn-light bgLightElements")} onClick={gobackHandle}>Go back</Button>
            </div>
        );
    }
    return (
        <div className={"shadow "+(!mode?"custom-link":"custom-link-dark")}>
            <p >{text}</p>
        </div>
    );
}

const BackButtonLayer = ({mode}) => {
    return (
        <div className="row justify-content-center my-5">
            <div className="container row justify-content-start">
                <CustomLinks text="Back" mode={mode}></CustomLinks>
            </div>
        </div>
    );
}

const CountryDetailsBody = ({borders,country,mode }) => {
    const countryNeighbors = borders
    return (
        <div className={"row justify-content-center m-0 p-0 "+(!mode?"text-light":"text-dark")}>
            <div className="row container justify-content-between  m-0 p-0">
                <div className="col-lg-5 col-12 row justify-content-lg-start justify-content-center p-0">
                    <img height="300px" width="430px" className="shadow" src={country.flag} alt={country.name}></img>
                </div>
                <div className="col-lg-7 col-12 row justify-content-lg-end p-0 mt-5 mt-lg-0">
                    <div className="row w-100 mt-4">
                        <h5 className="p-0 m-0 heading">{country.name}</h5>
                    </div>
                    <div className="row list-unstyled w-100 mt-4 mt-lg-0">
                        <div className="col-lg-6 p-0 my-li">
                            <li><span>Native Name: </span>{country.nativeName}</li>
                            <li><span>Population: </span>{country.population}</li>
                            <li><span>Region: </span>{country.region}</li>
                            <li><span>Sub Region: </span>{country.subregion}</li>
                            <li><span>Capital: </span>{country.capital}</li>
                        </div>
                        <div className="col-lg-6 my-li p-0 mt-5 mt-lg-0">
                            <li><span>Top Level Domain: </span>{country.topLevelDomain[0]}</li>
                            <li><span>Currencies: </span>{country.currencies[0].name}</li>
                            <li><span>Languages: </span>{country.languages.map((language) => (language.name + " "))}</li>
                        </div>
                    </div>
                    <div className="row  w-100 p-0 justify-content-start mt-5 mt-lg-0">
                        <div className="col-lg-3 col-12 p-0 font-weight-600">Border Countries: </div>
                        {countryNeighbors.length===0?null:
                            <div className="col-lg-9 col-12 row justify-content-lg-start mt-3 mt-lg-0">
                            {countryNeighbors.map((countryNeighbor)=>{
                                return <CustomLinks text={countryNeighbor} mode={mode}></CustomLinks>
                            })}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const CountryDetails = (props) => {
    console.log(props.countries);
    return (
        <div className="dup-body">
            <BackButtonLayer mode={props.mode}></BackButtonLayer>
            <CountryDetailsBody borders={props.borders} country={props.country} mode={props.mode}></CountryDetailsBody>
        </div>
    );
}