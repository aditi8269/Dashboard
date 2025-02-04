
import { useState , useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import ProductAdd from './ProductAdd';
import { useAppStore } from "../appStore";
import ProductEdit from './ProductEdit';
import Skeleton from '@mui/material/Skeleton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const empCollectionRef = collection(db, "products");
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState("");
  const handleEditOpen = () => setEditOpen(true);
  const handleOpen = () => setOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const handleClose = () => setOpen(false);
  const setRows = useAppStore((state)=>state.setRows);
  const rows = useAppStore((state)=>state.rows);

  useEffect(() => {
    getUsers();  
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
        setRows([]);
      getUsers();
    }
  };

  const editData = (id , Name, Price, Category)=>{
    const data ={
      id : id ,
      Name:Name,
      Price: Price,
      Category:Category
    };
    setFormid(data);
    handleEditOpen();
  }

  return (
    <>
    <div>
      <Button> </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProductAdd closeEvent={handleClose}/>
        </Box>
      </Modal>
      <Modal
        open={editOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProductEdit closeEvent={handleEditClose} fid={formid}/>
        </Box>
      </Modal>
    </div>
    {rows.length>0 &&(
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
         <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Products List
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2" paddingLeft={2} paddingRight={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.Name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button variant="contained" onClick={handleOpen} endIcon={<AddCircleIcon />}>
              Add
            </Button>
          </Stack>
          <Box height={10} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align="left" style={{ minWidth: "100px" }}
                ><b>Name</b>
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}
                ><b>Category</b>
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}
                ><b>Price</b>
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}
                ><b>Date</b>
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}
                ><b>Actions</b>
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}  key={row.code}>
                        <TableCell align="left">{row.Name}</TableCell>
                        <TableCell  align="left"> {row.Category}  </TableCell> 
                        <TableCell  align="left"> {row.Price}</TableCell>  
                        <TableCell  align="left"> {row.Date} </TableCell>
                        <TableCell key={row.id} align="left">
                        <Stack spacing={2} direction="row">
                <EditIcon
                  style={{
                    fontSize: "20px",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  className="cursor-pointer"
                   onClick={() => {editData(row.id , row.Name, row.Price , row.Category);}
                  }
                />
                <DeleteIcon
                  style={{
                    fontSize: "20px",
                    color: "darkred",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    deleteUser(row.id);
                  }}
                />
              </Stack>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5 ,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    )}
     {rows.length==0 &&(
      <>
        <Paper sx={{ width: '98%', overflow: 'hidden', padding:"12px" }}>
          <Box height={20}></Box>
          <Skeleton variant="rectangular" width={"100%"} height={30} />
          <Box height={40}></Box>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}></Box>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}></Box>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}></Box>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}></Box>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}></Box>
        </Paper>
    </>
    )}
    </>
  );
}
