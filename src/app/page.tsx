import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import SupplierDetails from "./supdetails/page";
export default function Home() {
  return (
   <>
  <Box width="100%" height='100vh' bgcolor='#f0f0f0'  padding='5px'>
<SupplierDetails/>
  </Box>
   
   </>
  );
}
