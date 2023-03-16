import { TextField } from "@mui/material"
import { Stack } from "@mui/system"
import { useState } from "react"

const MuiTextfield = () => {
    const [value, setValue] = useState("")
  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
            <TextField label="name" variant="outlined">

            </TextField>
            <TextField label="name" variant="filled">

            </TextField>
            <TextField label="name" variant="standard">

            </TextField>
        </Stack>
        <Stack direction="row">
            <TextField label="required" direction="row" required></TextField>
        </Stack>
        <Stack direction="row">
            <TextField label="required" direction="row" required value={value} onChange={e => setValue(e.target.value)} error={!value} type="password" helperText={!value?'required':'Do not share your password'}></TextField>
        </Stack>
    </Stack>
  )
}

export default MuiTextfield
