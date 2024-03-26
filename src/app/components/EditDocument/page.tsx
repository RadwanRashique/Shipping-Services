import React from 'react'
import  {Box ,Button,Typography,Stack,IconButton,Paper,TextField, Avatar,Grid  }from  '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import {styled} from '@mui/material/styles'


import UploadFileIcon from '@mui/icons-material/UploadFile';
const DemoPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    margin:'10px',
    marginTop:'11.5px',
   
    '& > :not(style)': {
      m: 1,
      width: '100%',
      height: '100%',
      
    },

}))
function EditDocument({ actionType }) {
    const Actiondata= actionType
  return (
   <>
     <Grid container style={{ height: '100vh' }} justifyContent='center' alignItems='center'>
      <Grid item xs={12} md={12} display='flex' justifyContent='center' alignItems='center' >
        <Box   sx={{
            width: { xs: '380px', md: '900px', }}} height='auto' bgcolor='#f7f7f5'>
       <Stack width='100%'   height='40px'  direction='row' alignItems='center' justifyContent='space-between' bgcolor='white'  >

       <Typography color='green' paddingLeft='10px' fontWeight='bold'>
  {Actiondata && Actiondata === 'ADD' ? 'ADD Document' : 'Edit Document'}
</Typography>
<IconButton ><CloseIcon  /></IconButton>
      </Stack>

      <DemoPaper  variant="elevation" sx={{marginBottom:'30px'}} >
      <Stack
      height={200}
      width={500}
      my={4}
      
    >
        <Typography sx={{marginLeft:'10px'}} fontWeight='bold' >Occupational Health & Safety Management Certificate (ISO 45001,) SHAS 18001 etc</Typography>
        <Stack direction={{xs:'column',md:'row'}}
  justifyContent="space-between"
  alignItems="center"
  spacing={2}  margin='20px'>
    
            <Stack sx={{bgcolor:'#f7f7f5'}}  direction='column'  justifyContent='center'  alignItems="center" padding='11.5px' spacing={2}>
              <Avatar sx={{color:'green', bgcolor:'white'}}>
<UploadFileIcon  />
               
              </Avatar>
                <Typography  variant='h6' fontWeight='bold'>Drag and Drop File Here</Typography>
                <Stack direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={1} ><Typography variant='subtitle1'> or</Typography>
  <Typography  variant='h6' color='green'>Browser Files</Typography>
  <Typography variant='subtitle1'> from your computer</Typography>
  </Stack>
                <Typography variant='h6'>Supported Files</Typography>
                <Typography variant='subtitle2'>(.docx,pdf,doc,jpg,.png,jpeg)</Typography>
                <Typography variant='subtitle2'>*You can Upload multiple files</Typography>
            </Stack>
       <Stack  margin='20px'  direction="column"
  justifyContent="center"
  alignItems="stretch"
  spacing={2}>
            <TextField id="outlined-basic" label="ssa-shipping.doc*" variant="outlined"  />
            <TextField label='Valid From*'  variant='outlined' type='date'  defaultValue='2024-12-31'  />
            <TextField label='Expire Date*'  variant='outlined' type='date' defaultValue='2025-12-31'  />
            </Stack>
        </Stack>



    </Stack>
    </DemoPaper>
    <Stack  width='100%' height='60px'  direction='row' alignItems='center' justifyContent='space-between' bgcolor='white'>
<Stack  direction='row' alignItems='center' justifyContent='flex-start'>
<Button variant='text' startIcon={<CloseIcon/> } sx={{color:'green'}} disableElevation>CANCEL</Button>
</Stack>
      <Button variant="contained" sx={{marginRight:"50px",bgcolor:'green',"&:hover":{bgcolor:'green'}}} disableElevation   >{actionType&&actionType==="ADD"?"ADD":"EDIT"}</Button>
      </Stack>
        </Box>
      </Grid>
    </Grid>
   
   </>
  )
}

export default EditDocument