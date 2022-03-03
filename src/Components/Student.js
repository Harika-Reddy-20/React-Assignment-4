import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Name, Age, Course, Batch, Change) {
  return { Name, Age, Course, Batch, Change};
}

const rows = [
  createData('Jhon', 26, 'MERN', 'October'),
  createData('Doe', 25, 'MERN', 'November'),
  createData('Biden', 26, 'MERN', 'September'),
  createData('Barar', 22, 'MERN', 'September'),
  createData('Christ', 23, 'MERN', 'October'),
];

export default function BasicTable() {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell><h5>Name</h5></TableCell>
            <TableCell align="right"><h5>Age</h5></TableCell>
            <TableCell align="right"><h5>Course</h5></TableCell>
            <TableCell align="right"><h5>Batch</h5></TableCell>
            <TableCell align="right"><h5>Change</h5></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{row.Change} <Link to='/New'>Edit</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

