import React, {useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };
  


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,

    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,

    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150,

    },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
    },


      
  ];
  



const Products = () => {
    const [open, openItem]=useState();
    const [data, setData] = useState([]);

    const navigate = useNavigate();


    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setData(res.data);
        })
      },[])

      const getItem = (id)=>{
        navigate(`/description/${id}`);
      }
  return (
    <div className="products">
        
        <Box sx={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowDoubleClick={(row)=>getItem(row.id)}
      />

{/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </Box>

    </div>
  )
}

export default Products