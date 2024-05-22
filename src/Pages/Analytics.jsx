import Sidemenu from "../components/Sidemenu";
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import GeoCharts from "../charts/GeoCharts";
import PieCharts from "../charts/PieCharts";
import HrBar from "../charts/HrBar";
import CountUp from 'react-countup';




export default function Analytics(){
    return(
        <>
        <div className="bgcolor">
        <Navbar/>
        <Box height={70}> </Box>
          <Box sx={{ display: 'flex' }}>
            <Sidemenu/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Stack spacing={2} direction="row">
                            <Box sx={{width:"50%"}}>
                            <Card sx={{  height: 19+"vh" ,backgroundColor:"#275566"}}  className="gradient">
                                <CardContent>
                                    <div>
                                    <Typography gutterBottom variant="p" component="div" sx={{color:"#ccd1d1"}}>
                                       Visitors
                                    </Typography>
                                    </div>
                                    <Typography gutterBottom variant="h5" component="div" color={"#ffffff"}>
                                      <CountUp delay={0.2} end={22000} duration={0.3}/>
                                    </Typography>
                                    <Typography gutterBottom variant="body" component="div" sx={{color:"#ccd1d1"}}>
                                       Since Last Week 
                                    </Typography>
                                </CardContent>
                        </Card>
                        <Card sx={{ height: 19+"vh"  ,backgroundColor:"#42b588" , marginTop:"16px" }} className="gradient">
                                <CardContent >
                                    <div>
                                    <Typography gutterBottom variant="p" component="div" sx={{color:"#ccd1d1", padding:"7px 0px"}}>
                                       Visitors
                                    </Typography>
                                    </div>
                                    <Typography gutterBottom variant="h5" component="div" color={"#ffffff"}>
                                    <CountUp delay={0.2} end={28000} duration={0.3}/>
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1" }}>
                                       Since Last Week
                                    </Typography>
                                </CardContent>
                        </Card>
                        </Box>
                        <Box sx={{width:"50%" , height:"50%"}}>
                            <Card sx={{  height: 19+"vh" ,backgroundColor:"#275566"}}  className="gradient">
                                <CardContent>
                                    <div>
                                    <Typography gutterBottom variant="p" component="div" sx={{color:"#ccd1d1"}}>
                                       Visitors
                                    </Typography>
                                    </div>
                                    <Typography gutterBottom variant="h5" component="div" color={"#ffffff"}>
                                      <CountUp delay={0.2} end={32000} duration={0.3}/>
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                                       Since Last Week 
                                    </Typography>
                                </CardContent>
                        </Card>
                        <Card sx={{ height: 19+"vh"  ,backgroundColor:"#42b588" , marginTop:"16px" }} className="gradient">
                                <CardContent >
                                    <div>
                                    <Typography gutterBottom variant="p" component="div" sx={{color:"#ccd1d1", padding:"7px 0px"}}>
                                       Visitors
                                    </Typography>
                                    </div>
                                    <Typography gutterBottom variant="h5" component="div" color={"#ffffff"}>
                                    <CountUp delay={0.2} end={38000} duration={0.6}/>
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1" }}>
                                       Since Last Week
                                    </Typography>
                                </CardContent>
                        </Card>
                        </Box>
                        </Stack>
                        </Grid>
                        <Grid item xs={7}>
                            <Card sx={{ height:40 +"vh" }}>
                                <CardContent>
                                    <HrBar/>
                                </CardContent>
                            </Card>
                        </Grid>
                </Grid>

                    <Box height={16}> </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                        <Card sx={{ height:40 +"vh" }}>
                                <CardContent>
                                    <GeoCharts/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                        <Card sx={{height:40 +"vh" }}>
                                <CardContent>
                                    <PieCharts/>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
            </Box>
        </Box>
        </div>
        </>
        
    )
}