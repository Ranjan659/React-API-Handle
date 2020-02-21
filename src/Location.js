import React,{Component} from "react"
import RadioInput from "./RadioInput";

class Location extends Component{


    handleChange=(event)=>{
    
        let val = event.target.value
        this.props.changeLocation(val)
    }
    render(){
        console.log(this.props.location)
        return(
            <div className="row">
                        <div className="text-column">
                            <label htmlFor="Location" className="input-label" value="Location">Location:</label>
                        </div>
                        <div className="input-column">
                            
                            <RadioInput
                            value="street"
                            label="Street"
                            checked={this.props.location === "street" ? true : false }
                            onChange={this.handleChange}
                            />

                            <RadioInput
                            value="city"
                            label="City"
                            checked={this.props.location === 'city' ? true : false }
                            onChange={this.handleChange}
                            />

                            <RadioInput
                            value="state"
                            label="State"
                            checked={this.props.location === 'state' ? true : false}
                            onChange={this.handleChange}
                            />
                            
                        </div>
                    </div>
        )
    }
}

export default Location