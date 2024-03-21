'use client'
import React  from "react";
import {Box, Typography, Stack,Alert, Paper ,Tab} from '@mui/material'
import {TabContext,TabList,TabPanel} from '@mui/lab'
import {styled} from '@mui/material/styles'
import HseqBox from "../components/HseqBox/pages";
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
        <Box  width='100%' height='100vh' >
<Stack  width='100%' height='60px'    direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={2}
  paddingLeft='20px'
 
 >
    <Box >

    <Typography variant='h6' color="#006400" sx={{fontWeight:'bold'}}>Shipping Services Argentina S.A.</Typography>
    </Box>
<Box  width='25%' paddingRight='200px' >

    <Alert severity='info' sx={{fontWeight:'bold'}}>
Bellow are listed certificates and evidence

    </Alert>
</Box>


</Stack >


<DemoPaper  variant="elevation">
<TabContext value='1'>
    <Box>
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