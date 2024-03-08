import React,{useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { API_URL } from './constant/URL';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


const Read = (props) => {
  const navigate = useNavigate()

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  const deleteUser = async(id)=>{
    await axios.delete(API_URL + id)
    callGetAPI();
}

const updateUser = (id)=>{
  console.log(id)
localStorage.setItem("userId",id)
navigate('/update')

}
  const [userData,setUserData] =useState([])

  const callGetAPI = async()=>{
      const res = await axios.get(API_URL);
      console.log(res.data)
      setUserData(res.data)
  }
  useEffect(()=>{
      callGetAPI();
  },[])

  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell >Last Name</StyledTableCell>
            <StyledTableCell >Terms</StyledTableCell>
            <StyledTableCell >Actions</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
       
           
            {
              userData.map((e)=>{
                return(
                  <StyledTableRow key={e.id}>
                  <StyledTableCell  scope="row">
                    {e?.firstName}
                  </StyledTableCell>
                  <StyledTableCell >{e?.lastName}</StyledTableCell>
                  <StyledTableCell >{e?.checked?"Accepted":"Declined"}</StyledTableCell>
                  <StyledTableCell >
                  <EditIcon className='editIcon' onClick={()=>{updateUser(e.id)}}/>
                    <DeleteIcon onClick={()=>{deleteUser(e.id)}} className='deleteIcon'/>
                  
                  </StyledTableCell>  
                 
                </StyledTableRow>
                )
              })
            }
         
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Read
