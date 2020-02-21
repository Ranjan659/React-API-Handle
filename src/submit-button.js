import React,{Component} from "react"

class Button extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="row">
                        <div className="button">
                            <div className="input-button" >
                                           <div id="loader"></div>
                    <p id="buttonText" style={{margin:"auto"}} onClick={this.props.handleSubmit }>Request</p>
                            </div>
                        </div>

                    </div>
        )
    }
}

export default Button