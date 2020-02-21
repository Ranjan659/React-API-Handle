import React from "react"
 import Form from "./Form.js"
//import Button from "./submit-button.js"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      //loading:false,
        //character:[]
    }
  }
  // componentDidMount(){
  //   this.setState((prevState)=> {
  //     return{
  //     loading:!prevState.loading
  //     }
  //   })
  //   fetch("https://randomuser.me/api/?inc=name&noinfo")
  //     .then(response => response.json())
  //     .then(data =>{
  //         this.setState({
  //           loading:!this.state.loading,
  //           character:data.results
  //         })
  //     })
  // }
  render(){

  //   console.log(this.state.character)
  //     let title = this.state.character.map((item)=>
  //       (
  //         item.name.title
  //       )
  //     )
  //  var first = this.state.character.map((item) => {
  //    return [item.name.first]
  //  })
  //  let last = this.state.character.map((item) => {
  //    return item.name.last
  //  })
        // let Title = this.state.loading ? "Loading... ":this.state.character.length>0? this.state.character[0].name.title:""
        // let First = this.state.loading ? "Loading... " : this.state.character.length > 0 ? this.state.character[0].name.first:""
        // let Last = this.state.loading ? "Loading..." : this.state.character.length > 0 ? this.state.character[0].name.last: ""
    
    return(
      <div>
        {/* <p>Title: {Title}</p>
        <p >First Name : {First}</p>
        <p>Last Name : {Last}</p>
        {console.log(this.state.character)} */}
      <Form />
      </div>
        
    )
  }
}
export default App