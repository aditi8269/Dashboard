import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState  } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { db } from "../firebaseConfig";
import Swal from "sweetalert2";
import { useAppStore } from "../appStore";
import { collection, getDocs, doc, updateDoc} from "firebase/firestore";





export default function ProductEdit({ fid ,closeEvent}){
    const [Name , setName] = useState("");
    const [Price , setPrice] = useState(0);
    const [Category , setCategory] = useState("");
    const setRows = useAppStore((state)=>state.setRows);
    const empCollectionRef = collection(db, "products");

    useEffect(()=>{
        console.log("FID:"+fid.id);
        setName(fid.Name);
        setPrice(fid.Price);
        setCategory(fid.Category);
    },[]);

    const handleNameChange=(event)=>{
        setName(event.target.value);
    }

    const handleCategoryChange=(event)=>{
        setCategory(event.target.value);
    }

    const handlePriceChange=(event)=>{
        setPrice(event.target.value);
    }

    const createUser=async()=>{
        const userDoc=doc(db , "products" , fid.id);
        const newFields={
        Name:Name  ,
        Price : Number(Price),
        Category : Category,
        Date: String( new Date())
      };
      await updateDoc(userDoc , newFields);
      getUsers();
      closeEvent();
      Swal.fire("submitted!", "Your file has been submitted" , "success");
    };

    const getUsers = async () => {
      const data = await getDocs(empCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  

    const gadgets = [
        {
          value: 'Mobile',
          label: 'Mobiles',
        },
        {
          value: 'Laptop',
          label: 'Laptops',
        },
        {
          value: 'Headphones',
          label: 'Headphones',
        },
        {
          value: 'Electronics',
          label: 'Electronics',
        },
      ];
    
    return(
        <>
        <Box sx={{m:2}} />
        <Typography variant="h5" align="center">
            Edit Product
        </Typography>
        <IconButton style={{position:"absolute", top:"0", right:"0"}}
           onClick={closeEvent}>
            <CloseIcon/>
        </IconButton>
        <Box height={20}/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField id="filled-basic" label="Name" variant="filled"  size="small" sx={{ minWidth:"100%"}} value={Name} onChange={handleNameChange}/>
            </Grid>
            <Grid item xs={6}>
            <TextField id="filled-basic" label="Category" variant="filled"  size="small" sx={{ minWidth:"100%"}} 
               value={Category} select onChange={handleCategoryChange} >
                {gadgets.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
            </Grid>
            <Grid item xs={6}>
            <TextField id="filled-basic" label="Price" variant="filled"  size="small" sx={{ minWidth:"100%"}} type={"Number"} 
            InputProps= {{startAdornment:(
            <InputAdornment position="start" >
                < CurrencyRupeeIcon sx={{size:"small"}}/>
            </InputAdornment>
            ),
            }}
            value={Price} onChange={handlePriceChange}  
            ></TextField>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" align="center">
                <Button variant="contained" onClick={createUser}>Submit</Button>
                </Typography>
            </Grid>
        </Grid>
        <Box sx={{m:4}}/>
        
        </>
    );
}