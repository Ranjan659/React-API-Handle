import React,{Component} from "react"
import Name from "./Name.js"
import Image from "./Image.js"
import Location from "./Location.js"
import Button from "./submit-button.js"
import Card from "./card.js"
import "./Form.css"
import "./Form.css"
import Axios from "axios"

class Form extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //             name:""
    //     }
    //  }
    state={
        name:"",
        image:"large",
        location:"street",
        isSubmitted:false,
        invalidName:"",
        submittedName:"",
        submittedImage:"",
        SubmittedLocation:''

    }

     handleChange = (event)=> {
        let val = event.target.value
        let name = event.target.name
       
        //{ console.log(name,val)}
       
        // if(this.state.isSubmitted){
        //     this.setState({
        //         isSubmitted:false
        //     })
        // }
        this.setState({
            [name]:val.toLowerCase().trim(),
           invalidName:"" 
        })
    }
         
    handleSubmit= (event) => {
        console.log(this.state.name)
        event.preventDefault();
        this.setState({
            isSubmitted:true,
            // submittedName:this.state.name

        })
        if(this.state.name === 'first' || this.state.name === 'last' || this.state.name ==='title'){
             Axios.get("https://randomuser.me/api/?inc=name&noinfo").then(result=>{
            console.log(result,'-------------------name')
            if(this.state.name === 'first'){
            this.setState({
                submittedName:result.data.results[0].name.first
            })
        }
        else if(this.state.name === 'last'){
            this.setState({
                submittedName : result.data.results[0].name.last
            })
        }
        else if(this.state.name === 'title'){
            this.setState({
                submittedName:result.data.results[0].name.title
            })
        }
        }).catch(Err=>{
            console.log(Err)
        })
        Axios.get("https://randomuser.me/api/?inc=picture&noinfo").then(result=>{
            console.log(result,'-------------------pictutre')
            if(this.state.image === 'large'){
            this.setState({
                submittedImage:result.data.results[0].picture.large
            })
        }
        else if(this.state.image === 'medium'){
            this.setState({
                submittedImage : result.data.results[0].picture.medium
            })
        }
        else{ 
            this.setState({
                submittedImage:result.data.results[0].picture.thumbnail
            })
        }
        }).catch(Err=>{
            console.log(Err)
        })
        Axios.get("https://randomuser.me/api/?inc=location&noinfo").then(result=>{
            console.log(result,'location')
            if(this.state.location === 'street'){
                this.setState({
                    SubmittedLocation:result.data.results[0].location.street
                })
        }
        else if(this.state.location === 'city'){
            this.setState({
                SubmittedLocation:result.data.results[0].location.city
            })
        }
        else if(this.state.location === 'state'){ 
            this.setState({
                SubmittedLocation:result.data.results[0].location.state
              
            })
        }
        }).catch(Err=>{
            console.log(Err)
        })
        
  }
  else{
    this.setState({
        invalidName : "Invalid Input!"
    })
  }
}
    render(){       
         return(
        <div className="container">
            <div className="container-left">
                <form name="myform" action="" method="get" >
                      <Name 
                     value={this.state.name}
                     name="name"
                     onChange={this.handleChange}
                     placeholder='E.g: first'
                     label='Name'
                      />
                      <br/>
                          <Image
                          changeState={image=>{
                              this.setState({
                                  image
                              })
                          }}
                         /> 
                       <Location
                           location={this.state.location}
                       changeLocation={location=>{
                           this.setState({
                               location
                           })
                           console.log('location',location)
                        }
                    }
                       />
                        <Button handleSubmit={this.handleSubmit} />
                   
                    </form>
                </div>

                
                <Card
                invalidName={this.state.invalidName}
                image={<img src={this.state.submittedImage} alt={this.state.image}/>}
                name={this.state.submittedName}
                location={this.state.SubmittedLocation}
                /> 
                
            </div>
        )
    }
}

export default Form