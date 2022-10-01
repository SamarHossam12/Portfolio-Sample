import React from "react";
import Card from "../card/card";
import "./Cards.css"
class Cards extends React.Component {
    render() {
        return (
            <div className="container-fuild" >
                <h1 className="txt3">Portfolio</h1>
                <div className="row">
                    <Card track="WEB DEASIGN" />
                    <Card track="MOBILE DESIGN" />
                    <Card track="LOGO DESIGN" />

                    <div className="row"></div>
                    <Card track="WEB APPLICATION DEVELOPMENT" />
                    <Card track="MOBILE APPLICATION DEVELOPMENT" />
                    <Card track="PWA DEVELOPMENT" />
                </div>
            </div>
        )

    }
}
export default Cards;