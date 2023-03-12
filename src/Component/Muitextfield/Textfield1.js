import React from 'react'
import { Stack } from '@mui/system'
import TextField from '@mui/material/TextField';

function Textfield1() {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={4}>
            <TextField label="name" variant='outlined'/>
            <TextField label="name" variant='filled'/>
            <TextField label="name" variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={4}>
            <TextField label="name" variant='outlined' required/>
            <TextField label="name" variant='outlined' helperText='do not share yr password'/>
            <TextField label="password" variant='outlined' type="password"/>
            <TextField label="name" variant='outlined' disabled/>
            <TextField label="read-only" variant='outlined' inputProps={{readOnly:"hi"}}/>
        </Stack>
        <div>hiiiiiiiiiiiii</div>
        <h1>ssssssiiiiiiddddddddd</h1>
    </Stack>
  )
}

export default Textfield1