import React from "react"

class Name extends React.Component {
    render() {
        const {label, name, value, onChange, placeholder } = this.props;
      return (
        <div className="row">
                    <div className="text-column">
                        <label htmlFor="Name" className="input-label" >{label}</label>
                    </div>
                    <div className="input-column">
                        <input type="text" 
                        value={value}  
                        name={name} 
                        placeholder={placeholder} 
                        className="input-text" 
                        id="name"
                        onChange={onChange}
                        />
                    </div>
                </div>
          
      )
    }
  }

  export default Name