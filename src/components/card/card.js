import React from "react";
import "./card.css"
class Card extends React.Component {

    render() {
        return (
            <>
                <div className=" col-sm">
                    {this.props.track}
                </div>
            </>
        );
    }
}
export default Card;




