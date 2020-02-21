import React from 'react'
const  RadioInput =({value,checked,label,onChange})=>{
    return(
        <div>
                    <input type="radio" 
                            name="Location" 
                            value={value}
                            checked={checked}
                            onChange={onChange}/>{label}
</div>
    )
}
export default RadioInput
