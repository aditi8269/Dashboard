
import { Card, CardContent, Divider, Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Personal() {
  return (<>
    <Box sx={{height:"30px"}}></Box>
    <Grid container spacing={2}>
        <Stack spacing={2} direction="row">     
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,  },
      }}
      noValidate
      autoComplete="off"
    >
        <Card >
        <h2 style={{paddingLeft: "6%"}}>Personal Information </h2>
        <Divider/>
        <CardContent>
        <TextField
          required
          id="outlined-required"
          label="Name"
        />
         <TextField
          required
          id="outlined-required"
          label="Location"
          defaultValue="india"
        />
        <TextField
          id="outlined-multiline-static"
          label="Bio"
          multiline
          sx={{minWidth:"83%"}}
          rows={4}
        />
        <TextField
          required
          id="outlined-required"
          label="UserType"
          defaultValue="Employee"
        />
         </CardContent>
    </Card>
      
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, },
      }}
      noValidate
      autoComplete="off"
    ><Card >
        <h2 style={{paddingLeft: "6%"}}>Contact Information </h2>
        <Divider/>
        <CardContent sx={{paddingLeft:"15px"}}>
        <TextField
          required
          id="outlined-required"
          label="Contact Number"
          type="number"
        />
         <TextField
          required
          id="outlined-required"
          label="Email"
          type='email'
        />
        <TextField
          id="outlined-multiline-static"
          label="Profile Url"
          multiline
          sx={{minWidth:"83%"}}
          rows={1}
          type='url'
        />
        <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          sx={{minWidth:"83%"}}
          rows={4}
        />
        </CardContent>
    </Card>
      
    </Box>
    </Stack>
    </Grid>
    </>
    
  );
}

    
