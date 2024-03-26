'use client'
import React  from "react";
import {Box, Typography, Stack,Alert, Paper ,Tab} from '@mui/material'
import {TabContext,TabList,TabPanel} from '@mui/lab'
import {styled} from '@mui/material/styles'
import HseqBox from "../components/HseqBox/page";
import SaveAlert from '../components/saveAlert/page'

const DemoPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1,
      width: '100%',
      height: '100%',
    },

}))
function SupplierDetails(){
   

    return(
        <>
        <Box  width='100%' height='10%'    >
      
      
        
<Stack  width='100%' height={{sm:"160px",md:'80px'}}  paddingBottom='20px'  direction={{ sm:'column', md:'row' } }
  justifyContent= {{md:"space-between", xs:'center'}} alignItems={{md:"space-between", xs:'stretch'}}
 
  spacing={4}
  paddingLeft='20px'
  paddingTop='5px'
  
 >
      
    <Box width='50%'  >

    <Typography variant='h6'color="#006400" sx={{fontWeight:'bold'}}>Shipping Services Argentina S.A.</Typography>
    </Box  >
<Stack sx={{ height: { sm: '30%', md: '60%' }}} width='40%'    direction='row' justifyContent='center'     >

    <Alert severity='info' sx={{fontWeight:'bold', fontSize:{ xs: '10px', md: '13px',  width: '80%' }}} >
Bellow are listed certificates and evidence

    </Alert>
</Stack>

</Stack >


<DemoPaper  variant="elevation">
<TabContext value='1'>
    <Box   width='auto' height='auto'>
      <TabList  textColor='secondary' indicatorColor='secondary' >
        <Tab  label='HSEQ' value='1' />
        <Tab  label='PROCUREMENT' value='2' />
      </TabList>

      <TabPanel value="1"><HseqBox/></TabPanel >
     <TabPanel value='2'>Second view</TabPanel>

    </Box>
</TabContext>
</DemoPaper>


        </Box>
       

       
        </>
    )
}

export default SupplierDetails