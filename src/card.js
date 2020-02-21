import React from "react"

    const  Card =({name,invalidName,location,image})=>{
        return(
            <div className="container-right">
        	<div className="card" style={{display: "flex",justifyContent: "center",alignItems: "center" }}>
                <div style={{height: "100%"}} >
                     {/* <p id="buttonText" style="margin:auto;"></p> */}
                            
        		<div id="demo1" >{image}</div>
                       <div id="loader1"></div>

                <div id="demo2">{name}{invalidName}</div>
                <div id="demo3">{location}</div>
                </div> 
        	</div>

        </div>
        )
    }


export default Card