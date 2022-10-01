import React from "react";
import ProgressBar from "../progress/progress";

class Pbar extends React.Component {
    render() {
        return (
            <div className="container-fuild" >
                <div className="row">
                    <ProgressBar label="HTML" id="p1" value="90" max="100" />
                    <ProgressBar label="CSS" id="p2" value="90" max="100" />
                    <ProgressBar label="JavaScript" id="p3" value="70" max="100" />       
                    <ProgressBar label="React" id="p4" value="70" max="100" />
                    <ProgressBar label="Node.js" id="p5" value="50" max="100" />
                    <ProgressBar label="Node.js" id="p5" value="50" max="100" />
                </div>
            </div>
        )

    }
}
export default Pbar;