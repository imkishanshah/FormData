import { MenuItem, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

const MuiSelect = () => {
    const [countries, setCountries] = useState([])
    console.log(countries);
    const handleChange = (e) => {
        const value = e.target.value
        setCountries(typeof value === 'string'? value.split(','): value)
    }
  return (
    <div>
      <Box width='250px '>
        <TextField label="select Country" select value={countries} onChange={handleChange} fullWidth SelectProps={{multiple:true}}>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Austria</MenuItem>
        </TextField>
        
      </Box>
    </div>
  )
}

export default MuiSelect
