
import { Card, CardContent, Divider, Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import EmailIcon from '@mui/icons-material/Email';



export default function Profile() {
  return (
  <>
    <Box sx={{height:"30px"}}></Box>
    <Grid container spacing={2}>
        <Stack spacing={2} direction="row">     
            <Card sx={{ minWidth: 350 , maxHeight: "200px" }}>
            <CardContent>
            <Typography variant="h5" component="div">
                  P kumar
                </Typography>
                <Divider/>
                <Typography  component="div" sx={{marginTop:"20px"}}>
                 <span > prashnatkumar@gmail.com</span>  
                </Typography>
                <Divider/>
                <Typography  component="div" sx={{marginTop:"20px"}}>
                 <span >+91 0005624327</span>  
                </Typography>
                <Divider/>
                <Typography  component="div" sx={{marginTop:"20px"}}>
                 <span > Bhopal (MP)</span>  
                </Typography>
            </CardContent>
            </Card>


            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, },
            }}
            noValidate
            autoComplete="off"
            ><Card >
                <CardContent sx={{paddingLeft:"15px"}}>
                <div>
                <Typography variant="h5" component="div">
                  About
                </Typography>
                <Typography component="div">
                 Lorem Ipsum is often used as a placeholder for text in layout design, to add depth and detail to a design without distracting from its visual aspects. It is also commonly used to create a realistic-looking document or design, as it has a natural-looking flow and structure. 
                </Typography>
                </div>
                <Divider/>
                <Typography  variant="h5" sx={{marginTop:"20px"}}>
                 Details
                </Typography>
                <Divider/>
                <Typography  component="div" sx={{padding:"20px"}}>
                 <span > <b>Name :</b> Prashnat kumar</span>  
                </Typography>
                <Divider/>
                <Typography  component="div" sx={{padding:"20px"}}>
                 <span > <b> Fathers Name :</b> Govind kumar</span>  
                </Typography>
                <Divider/>
                <Typography  component="div" sx={{padding:"20px"}}>
                 <span > <b>Address :</b> Near shastri bridge, Bhopal (MP)</span>  
                </Typography>
                <Divider/>
                <Typography  component="div" sx={{padding:"20px"}}>
                 <span > <b>Pincode :</b> 462022</span>  
                </Typography>
                <Divider/>
                <Typography  component="div" sx={{padding:"20px"}}>
                 <span > <b>Account Holder :</b> Yes</span>  
                </Typography>
                </CardContent>
            </Card>
            
            </Box>
        </Stack>
    </Grid>
  </>
  );
}