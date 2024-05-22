import Sidemenu from "../components/Sidemenu";
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";
import ProductList from "../Products/ProductList";


export default function Products(){
    return(
        <>
        <Navbar/>
        <Box height={70}> </Box>
        <Box sx={{ display: 'flex' }}>
            <Sidemenu/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <ProductList/>
            </Box>
        </Box>
        </>
        
    )
}