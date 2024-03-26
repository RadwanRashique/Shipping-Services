

import { Box, Stack, Typography,IconButton, TextField,Table,TableBody,TableCell,TableContainer,TableRow, Chip, Button, Divider,Grid } from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import SearchIcon from '@mui/icons-material/Search';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { createTheme } from '@mui/material/styles'

import React, { useState } from 'react'

import EditDocument from '../EditDocument/page';

const theme = createTheme({
  palette: {
    primary: {
      light: '#81d4fa',
      main: '#3f50b5',
      
    },
    warning: {
      light: '#ffcc80',
      main:  '#ffe0b2'
    },

    success:{
      light:'#ef9a9a',
      main:'#f44336'
    },

  },
});



let Data = [
    {certificate:'Quality Management Certificate (eg ISO 9001)', validityDate:'01 Mar 2024', ExpireDate:"01 Mar 2026" , Status:'Pending Approval'}, 

     

{certificate: 'Additional Certificate', Status: 'Document Missing',validityDate:'01 Mar 2024', ExpireDate:'01 Mar 2024',}

, {certificate: 'Environment Certification (e.g.ISO 14001 etc)', validityDate: '01 Mar 2024', ExpireDate: '01 Mar 2024', Status: 'Expiring soon'},
    {certificate:'Corporate Social Responsibility Certification (e.g.ISO 26000)', validityDate:'01 Mar 2024', ExpireDate:'01 Mar 2024', Status:'Expired'}, 
    {certificate:'Environment Certification (e.g.ISO 14001 etc)', validityDate:'01 Mar 2024', ExpireDate:'01 Mar 2024', Status:'Expiring soon'}, 
    {certificate:'Quality Management Certification (eg ISO 9001)', validityDate:'01 Mar 2024', ExpireDate:'01 Mar 2024', Status:'Pending Approval'}
  ];
  


function HseqBox() {

  const [documentAction,setDocumentAction]=useState(false)
  const [actionType, setActionType] = useState('');

   
  const handleClose = () => {
    setDocumentAction(false); 
  };
 
  return (
    <Box>
      <Grid item xs={12} md={12} >
      {documentAction && (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999
          }}
        >
          <Grid item  xs={6} md={12} >

          <EditDocument actionType={actionType} />
          </Grid>
         
        </Box>
      )}
        
      </Grid>
    

<Stack  alignItems='self-start' justifyContent='space-between' bgcolor='#f0f0f0' sx={{paddingLeft:'30px', padding:'10px'}}>

<Stack  sx={{width:'25%' }}  direction='row' justifyContent='space-between'>
<Stack color="#006400" bgcolor='#d0d9d3' width='50px'  textAlign='center'>
        <Typography variant='h6'>22</Typography>
        <Typography  variant='subtitle2'>All</Typography>
    </Stack>
    <Divider orientation='vertical' variant='middle' flexItem/>
    <Stack direction='column' paddingLeft='20px'  >
        
        <Typography variant='h6' color='#fa8b14'>21</Typography>
    <Typography  variant='subtitle2'>Missing</Typography>
    </Stack>
    <Stack paddingLeft='20px' ><Typography variant='h6' color='primary'  >1</Typography>
    
    <Typography  variant='subtitle2' >Pending Approval</Typography>
    </Stack>
    <Stack  paddingLeft='20px'><Typography variant='h6' color='error' >0</Typography>
    <Typography  variant='subtitle2' >Expired</Typography>
    </Stack>
</Stack>

</Stack>

<Stack spacing={2} width='100%' marginTop='10px' direction={{xs:'column-reverse',sm:'row',}} justifyContent='space-between' alignItems={{sm:'flex-start',md:'center'}}>

    <Stack width="10%" direction='row'>
    <IconButton disableRipple ><UnfoldMoreIcon  /></IconButton>
  <Button variant='text' sx={{color:'#b1b2b3'}} disableRipple disableElevation  endIcon={<ArrowDropDownIcon/>}>SORT</Button>
    
    </Stack>
    <Stack   direction='row'>
<TextField  variant='standard' label='search'   InputProps={{
          endAdornment: (
            <IconButton disableRipple>
              <SearchIcon />
            </IconButton>
          ),
        }}/>

    </Stack>
    
</Stack>
    
<TableContainer>
    <Table>

        <TableBody>

{
    Data.map((data,index)=>(
        <TableRow key={index}>
        <TableCell sx={{fontWeight:'bold'}}>{data.certificate}</TableCell>
        <TableCell ><Typography variant='body2'>Valid from</Typography>
        <Typography variant='subtitle2' style={{fontWeight:'bold'}}>{data.validityDate}</Typography>
        </TableCell>
        <TableCell><Typography variant='body2'>Expire Date</Typography>
        <Typography variant='subtitle2' style={{fontWeight:'bold'}}>{data.ExpireDate}</Typography></TableCell>
        <TableCell  color='red'>{data.Status === 'Pending Approval' && (
                    <Chip   sx={{ backgroundColor: theme.palette.primary.light}}  icon={<FiberManualRecordIcon />} label={data.Status} />
                  )}
                  {data.Status === 'Expired' && (
                    <Chip  sx={{ backgroundColor: theme.palette.success.light}}  icon={<ErrorOutlineIcon />} label={data.Status} />
                  )}
                  {data.Status === 'Expiring soon' &&  (
                    <Chip sx={{ backgroundColor: theme.palette.success.light}} icon={<AccessTimeIcon />} label={data.Status} />
                  )}
                  {
                    data.Status==='Document Missing'&&(
                      <Chip sx={{backgroundColor:theme.palette.warning.main} } icon={<FiberManualRecordIcon />}  label={data.Status}/>
                    )
                  }</TableCell>
        <TableCell> 
<Stack alignItems='flex-end'>

{
        data.Status==="Document Missing"&& (
                     
<Stack alignItems='flex-end' spacing={4}>
    <Button variant='outlined' color='success' onClick={() => {
        setActionType('ADD');
        setDocumentAction(true);
    }} >ADD</Button>
    <IconButton><MoreVertIcon /></IconButton>

</Stack>
        )
      }     
{
                data.Status==='Pending Approval' && (
<Stack direction="row" spacing={2} alignItems="center">
  <MessageIcon />
  <MoreVertIcon />
</Stack> 
                )
            }
 {
    (data.Status==='Expiring soon' || data.Status==='Expired') && (
        <Stack   direction='row' spacing={2} alignItems='center' >
<Button variant='outlined'  color='success'   onClick={() => {
        setActionType('RENEW');
        setDocumentAction(true);
    }}>RENEW</Button>

<MoreVertIcon/>

        </Stack>
    )
 }
    
</Stack>      
</TableCell>
    </TableRow>

    ))
}
          
        </TableBody>
    </Table>
</TableContainer>


    </Box>
  )
}

export default HseqBox

