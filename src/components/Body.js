import React, { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardText, CardBody, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom";
import lottie from "lottie-web";

const AllCountries = ({ mode, countries, region }) => {
    return (
        <div className="row justify-content-center main-body">
            <div className="container row justify-content-lg-start justify-content-center">
                {countries.map((country, i) => <CustomCard key={i} region={region} country={country} mode={mode}></CustomCard>)}
            </div>
        </div>
    );
}

export const BodyHeaderComponent = ({ mode, changeRegion, countries, region }) => {

    const [mainCountries, changeCountries] = useState(countries)

    const onChange = (event) => {
        const newCountries = countries.filter((country) => country.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
        changeCountries(newCountries)
    }

    const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]
    const [dropdownState, dropdownChange] = useState(false)
    return (
        <div>
            <div className="row justify-content-center">
                <div className="container row justify-content-md-between justify-content-center">
                    <div className={"col-12 col-md-7 row justify-content-start " + (!mode ? "text-light sub-white" : "text-dark sub-dark")}>
                        <input onChange={onChange} className={"my-bg form-control mydropdown shadow " + (mode ? "mydropdown-light" : "text-light")} placeholder="Search for a country..." ></input>
                        <span class="fa fa-search"></span>
                    </div>
                    <div className="col-12 col-md-5 row justify-content-md-end mt-md-0 mt-4">
                        <Dropdown className="shadow" isOpen={dropdownState} toggle={() => dropdownChange(!dropdownState)}>
                            <DropdownToggle className={(!mode ? "mydropdown" : "mydropdown-light text-dark light-hover")}>Filter by Region <i className="fa fa-chevron-down fa-sm ml-5" aria-hidden="true"></i></DropdownToggle>
                            <DropdownMenu className={"mydropdownItems " + (mode ? "mydropdownItems-light" : "")}>
                                {regions.map((region) => (<DropdownItem onClick={() => { changeRegion(region) }} className={"mydropdownItem " + (mode ? "mydropdownItem-light" : "")}>{region}</DropdownItem>))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <AllCountries mode={mode} countries={mainCountries} region={region}></AllCountries>
        </div>
    );
}

const CustomCard = ({ country, mode, filter, region }) => {
    if (region != country.region && region != "All") {
        return null;
    }
    else {
        return (
            <div className="col-lg-3 " style={{ maxWidth: "300px" }}>
                <NavLink to={"/country/" + country.name} className="de-Link">
                    <Card className={"shadow custom-card main-body " + (!mode ? "my-bg-2 card-hover-dark" : "bgLightElements card-hover-light")}>
                        <LazyLoadImage effect="blur" className="card-img" height="170px" src={country.flag} style={{ objectFit: "cover" }}></LazyLoadImage>
                        <CardBody className={"" + (!mode ? "text-light" : "text-dark")}>
                            <CardTitle>
                                <h5>{country.name}</h5>
                            </CardTitle>
                            <CardText className="mb-4">
                                <li><span className="sideText">Population: </span>{country.population}</li>
                                <li><span className="sideText">Region: </span>{country.region}</li>
                                <li><span className="sideText">Capital: </span>{country.capital}</li>
                            </CardText>
                        </CardBody>
                    </Card>
                </NavLink>
            </div>
        );
    }
}


export const MainBodyComponent = ({ isLoading, countries, mode, changeRegion, region, changeSearch }) => {

    const myContainer = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            height: 300,
            width: 300,
            container: myContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("./loading.json")
        })
    })

    if (isLoading) {
        return (
            <div className="dup-body text-center">
                <div className="animation-container mx-auto" style={{ width: 250, height: 250 }} ref={myContainer}>
                </div>
            </div>);
    }
    else {
        return (
            <div className="dup-body p-sm-0 p-5">
                <BodyHeaderComponent mode={mode} countries={countries} region={region} changeRegion={changeRegion} changeSearch={changeSearch}></BodyHeaderComponent>
            </div>
        );
    }
}