import React from "react";
import "../App.css";

export const Header = ({mode,onClick}) =>{
    return(<div className={"row justify-content-center header py-4 shadow mb-sm-5 "+(!mode?"my-bg-2 ":"bgLightElements")}>
        <div className="container row justify-content-between ">
            <div className="col-sm-6 col-7 text-light row justify-content-sm-start justify-content-end">
                <h3 className={"my-auto p-sm-0 "+(!mode?"text-light":"text-dark")}>Where in the World?</h3>
            </div>
            <div className="col-sm-6 col-5 text-light my-auto row justify-content-sm-end justify-content-center">
                    <button onClick={onClick} className={"btn "+(mode?"btn-light bgLightElements":"btn-dark my-bg-2")}><p className={"my-auto p-sm-0 "+(!mode?"text-light":"text-dark")}><i class="fa fa-moon-o my-auto mr-2" aria-hidden="true"></i>Dark Mode</p></button>     
            </div>
        </div>
    </div>);
}