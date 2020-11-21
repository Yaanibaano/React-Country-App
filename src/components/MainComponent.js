import { Header } from "./Header"
import { MainBodyComponent } from "./Body";
import { CountryDetails } from "./CountryDetails";
import React, { useEffect } from "react";
import {change_region,change_Mode, change_search,fetchCountries} from "../redux/actions"
import {connect} from "react-redux";
import { Switch, Route ,withRouter} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const mapDispatch = dispatch =>{
    return{
        change_region:(item)=>dispatch(change_region(item)),
        change_mode:(mode)=>dispatch(change_Mode(mode)),
        change_search:(item)=>dispatch(change_search(item)),
        fetchCountries: ()=> {dispatch(fetchCountries())}
    }
}

const mapState = state =>{
    return{
        region:state.region,
        countries:state.countries,
        mode:state.darkMode,
        search:state.search,
        isLoading:state.isLoading
    }
}


function MainComponent(props) {

    const CountryWithName = ({match})=>{
        const name = match.params.name;
        const country = props.countries.filter((country)=>country.name===name);
        return(<CountryDetails borders={country[0].borders} country={country[0]} mode={props.mode}></CountryDetails>);
    }  
    
    useEffect(props.fetchCountries,[]);

    return (
        <div className={" "+(props.mode?"bg-veryLightGray":"")}>
        {/* <body className={(props.mode?"bg-veryLightGray":"")}> */}
            <Header mode={props.mode} onClick={props.change_mode}></Header>
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={450}
                        classNames="page"
                    >
                        <Switch location={location}>
                            <Route exact path="/" component={()=><MainBodyComponent isLoading={props.isLoading} region={props.region} changeSearch={props.change_search} search={props.search} changeRegion={props.change_region} countries={props.countries} mode={props.mode} ></MainBodyComponent>} />
                            <Route path="/country/:name" component={CountryWithName} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </div>
    );
}

export default withRouter(connect(mapState,mapDispatch)(MainComponent,CountryDetails))