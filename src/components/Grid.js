

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const headers=["id","First Name","Last Name","Email", "Gender"];
export default function BasicTable(props) {

    function compare( a, b ) {
        if ( a.first_name.toLowerCase() < b.first_name.toLowerCase() ){
          return -1;
        }
        if ( a.last_name.toLowerCase() > b.last_name.toLowerCase() ){
          return 1;
        }
        return 0;
      }
      
    
      

const {filterText,selectedGender,data : rows}=props;
const filterByText=(row)=>{
if(row.first_name.toLowerCase().includes(filterText.toLowerCase())||row.last_name.toLowerCase().includes(filterText.toLowerCase())||row.email.toLowerCase().includes(filterText.toLowerCase()))
    return true
return false
}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {headers.map(item=><TableCell align="center">{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.filter(rowItem=>selectedGender.length>0? selectedGender.includes(rowItem.gender):true).filter(rowItem=>filterByText(rowItem)).sort(compare).map((row) => (
            <TableRow
              key={row.name}
           
            >
              <TableCell align='center' component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.first_name}</TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}