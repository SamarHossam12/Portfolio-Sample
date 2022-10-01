import React from "react";
import "./progress.css"
class ProgessBar extends React.Component {
    //mounting

    //awl 7aga bttnada el constructor -1
    // constructor(props) {
    // }

    // componentDidMount(){

    // }

    // //updating - rerender lm l rpoperty tt8yar
    // componentDidUpdate(){

    // }

    // //unmounting

    // //clean up
    // componentWillUnmount(){

    // }

    //fn ms2ola ttb3 shkl el component-2
    render() {
        return (
            <>
                <div className="col-sm-12">
                    <label >{this.props.label}</label>
                    <progress  value={this.props.value} max={this.props.max}> {this.props.value} % </progress>
                </div>

            </>

        );
    }
}

//law 3yza arequest APIs -3 lifecycle hook
export default ProgessBar;
