import Sidemenu from "../components/Sidemenu";
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";
import List from "../Settings/List";


export default function Setting(){
    return(
        <>
        <div className="bgcolor">
        <Navbar/>
        <Box height={70}> </Box>
        <Box sx={{ display: 'flex' }}>
            <Sidemenu/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
               <List/>
            </Box>
        </Box>
        </div>
        </>
    
        
    )
}
