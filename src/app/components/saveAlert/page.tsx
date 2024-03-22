import React from 'react'
import {Alert,AlertTitle,Box} from '@mui/material';
function saveAlert() {
  return (
    <Box   height='25%'  width={{sm:'100%',md:'25%', xs:'100%'}}  marginLeft='75%'  >
    <Alert severity="success">
      <AlertTitle>Quality Management Certification (eg ISO 9001) </AlertTitle>
      Your documentation has been edited and saved successfully
    </Alert>
    
  </Box>
  )
}

export default saveAlert