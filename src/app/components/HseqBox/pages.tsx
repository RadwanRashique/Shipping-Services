import { Box, Stack, Typography,IconButton, TextField,Table,TableBody,TableCell,TableContainer,TableRow, Chip, Button, Divider } from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import SearchIcon from '@mui/icons-material/Search';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react'

let Data = [
    {certificate:'Quality Management Certificate (eg ISO 9001)', validityDate:'01 Mar 2024', ExpireDate:"01 Mar 2026" , Status:'Pending Approval'}, 

     
{certificate: 'Environment Certification (e.g.ISO 14001 etc)', validityDate: '01 Mar 2024', ExpireDate: '01 Mar 2024', Status: 'Expiring soon'},
        {certificate: 'Additional Certificate', Status: 'Document Missing'}

, 
    {certificate:'Corporate Social Responsibility Certification (e.g.ISO 26000)', validityDate:'01 Mar 2024', ExpireDate:'01 Mar 2024', Status:'Expired'}, 
    {certificate:'Environment Certification (e.g.ISO 14001 etc)', validityDate:'01 Mar 2024', ExpireDate:'01 Mar 2024', Status:'Expiring soon'}, 
    {certificate:'Quality Management Certification (eg ISO 9001)', validityDate:'01 Mar 2024', ExpireDate:'01 Mar 2024', Status:'Pending Approval'}
  ];
  


function HseqBox() {
  return (
    <Box>

<Stack direction='row' alignItems='self-start' justifyContent='start' bgcolor='#f0f0f0' sx={{paddingLeft:'30px', padding:'10px'}}>

<Stack  sx={{width:'25%' }}  direction='row' justifyContent='space-between'>
<Stack color="#006400" bgcolor='#d0d9d3' width='50px'  textAlign='center'>
        <Typography variant='h6'>22</Typography>
        <Typography  variant='subtitle1'>All</Typography>
    </Stack>
    <Divider orientation='vertical' variant='middle' flexItem/>
    <Stack direction='column'  >
        
        <Typography variant='h6' color='#fa8b14'>21</Typography>
    <Typography  variant='subtitle1'>Missing</Typography>
    </Stack>
    <Stack><Typography variant='h6' color='primary'>1</Typography>
    
    <Typography  variant='subtitle1'>Pending Approval</Typography>
    </Stack>
    <Stack><Typography variant='h6' color='error'>0</Typography>
    <Typography  variant='subtitle1' >Expired</Typography>
    </Stack>
</Stack>

</Stack>

<Stack width='100%' marginTop='10px' direction='row' justifyContent='space-between' alignItems='center'>

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
                    <Chip color="primary" icon={<FiberManualRecordIcon />} label={data.Status} />
                  )}
                  {data.Status === 'Expired' && (
                    <Chip color="error" icon={<ErrorOutlineIcon />} label={data.Status} />
                  )}
                  {data.Status === 'Expiring soon' &&  (
                    <Chip color="error" icon={<AccessTimeIcon />} label={data.Status} />
                  )}</TableCell>
        <TableCell> 
<Stack alignItems='flex-end'>
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
<Button variant='outlined' color='success'>RENEW</Button>
<MoreVertIcon/>

        </Stack>
    )
 }
      {
        data.Status==="Document missing"&& (
                     
<Stack alignItems='flex-end' spacing={4}>
    <Button variant='outlined' color='success' >ADD</Button>
    <IconButton><MoreVertIcon /></IconButton>

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

