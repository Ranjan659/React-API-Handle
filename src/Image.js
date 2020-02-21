import React from "react"

class Image extends React.Component{
 handleChange=(data)=>{
     this.props.changeState(data.target.value)
        console.log(data.target.value)
        
    }
    render(){
        return(
            <div className="row">
            <div className="text-column">
                <label htmlFor="Images" className="input-label">Image:</label>
            </div>
            <div className="input-column">
                <select  id="Image" className="input-text" onChange={this.handleChange}>
                    <option value="large" >Large</option>
                    <option value="medium">Medium </option>
                    <option value="thumbnail">Thumbnail</option>
                </select>
            </div>
        </div>

        )
    }
}

export default Image

