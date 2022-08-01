import React, { useContext } from 'react'
import conversionContext from '../context/conversionContext'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function ConversionForm() {

  const {currencyList,from,setFrom,to,setTo,setAmount,convert}=useContext(conversionContext)
  const list = Object.entries(currencyList)
  
   const fromHandleChange=(event)=>{
       setFrom(event.target.value)
      }
    const toHandleChange=(event)=>{
      setTo(event.target.value)
    }
    const amountHandleChange=(event)=>{
      setAmount(event.target.value)
    }
  



   return (
    <Container>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <InputLabel id="from-label">From</InputLabel>
             <Select labelId="from-label" fullWidth label="From" value={from} onChange={fromHandleChange}>
                {list.map((item,index)=>(
                 <MenuItem key={index} value={item[0]}>{item[1]}</MenuItem>
                  ))}
             </Select>
        </Grid>
        <Grid item xs={6}>
              <InputLabel id="to-label">To</InputLabel>
              <Select labelId='to-label' fullWidth label="To" value={to} onChange={toHandleChange}>
               {list.map((item,index)=>(
                 <MenuItem key={index} value={item[0]}>{item[1]}</MenuItem>
                 ))}
              </Select>
    
        </Grid>

        <Grid item xs={12}>
        
        <TextField id="outlined-basic" label="Amount" fullWidth variant="outlined" onChange={amountHandleChange} />

        </Grid>
       
        <Grid item xs={12}>
        
        <Button fullWidth variant="contained" onClick={convert}>Convert</Button>

        </Grid>
       
       
      </Grid>
    </Box>





             
          
     

    </Container>
            

        

           


          
  )
}

export default ConversionForm
