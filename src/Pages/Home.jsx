import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidemenu";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PaymentIcon from '@mui/icons-material/Payment';
import "../Dash.css";
import AccordionDash from "../components/AccordionDash";
import Barcharts from "../charts/Barcharts";
import CountUp from "react-countup";




export default function Home(){
    return(
        <>
        <div className="bgcolor">
        <Navbar/>
        <Box height={70}> </Box>
           <Box sx={{ display: 'flex' }}>
                <Sidemenu/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                        <Stack spacing={2} direction="row">
                        <Card sx={{ minWidth: 49 +"%" , height:150 ,backgroundColor:"#275566"}}  className="gradient">
                                <CardContent>
                                    <div>
                                     <ShoppingBagIcon sx={{color:"aliceblue"}}/>
                                    </div>
                                    <Typography gutterBottom variant="h5" component="div" color={"#ffffff"}>
                                      $<CountUp delay={0.2} end={900} duration={0.4}/>
                                    </Typography>
                                    <Typography gutterBottom variant="body" component="div" sx={{color:"#ccd1d1"}}>
                                       Total Orders 
                                    </Typography>
                                </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 49 +"%" , height:150 ,backgroundColor:"#42b588" }} className="gradient">
                                <CardContent >
                                    <div>
                                     <PaymentIcon sx={{color:"aliceblue"}}/>
                                    </div>
                                    <Typography gutterBottom variant="h5" component="div" color={"#ffffff"}>
                                       $<CountUp delay={0.2} end={500} duration={0.4}/>
                                    </Typography>
                                    <Typography gutterBottom variant="body" component="div" sx={{color:"#ccd1d1" }}>
                                       Total Earnings 
                                    </Typography>
                                </CardContent>
                        </Card>
                        </Stack>

                        </Grid>
                        <Grid item xs={4}>
                        <Stack spacing={2} direction="column"> 
                        <Card sx={{ maxWidth: 345 ,backgroundColor:"#42b588" }}>
                                <Stack spacing={2} direction="row"> 
                                    <div className="iconstyle ">
                                        <StorefrontIcon sx={{marginTop:"20px" , marginLeft:"20px",color:"aliceblue" }}/>
                                    </div>
                                    <div className="paddingall">
                                        <span className="pricetitle" >$203K</span>
                                        <br/>
                                        <span className="pricesubtitle">Total Income</span>
                                    </div>
                                </Stack>
                            </Card>
                        <Card sx={{ maxWidth: 345  }}>
                        <Stack spacing={2} direction="row" > 
                                <div className="iconstyle">
                                    <StorefrontIcon sx={{marginTop:"20px" , marginLeft:"20px" , }}/>
                                </div>
                                    <div className="paddingall">
                                        <span className="pricetitle" >$203K</span>
                                        <br/>
                                        <span className="pricesubtitle">Total Income</span>
                                    </div>
                                </Stack>
                            </Card>
                        </Stack>    
                        </Grid>
                    </Grid>

                    <Box height={20}> </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                        <Card sx={{ height:70 +"vh" }}>
                                <CardContent>
                                    <Barcharts/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                        <Card sx={{height:70 +"vh" }}>
                                <CardContent>
                                <div className="paddingall">
                                        <span className="pricetitle" >POPULAR PRODUCTS</span>
                                    </div>
                                    <AccordionDash/>
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