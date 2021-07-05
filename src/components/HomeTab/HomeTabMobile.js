import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import React  from 'react'; 
import { withStyles, } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: 'transparent',
        fontSize: 16,
        color: theme.palette.primary.light,
    }
  
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    width: '100%',
    margin: '0 auto', 
    padding: '0.5em',
    color: theme.palette.primary.light,
    backgroundColor: 'transparent',
  },
}))(TableRow);

const StyledTableHeadCell = withStyles(theme => ({
    root: { 
    backgroundColor: 'rgba(53%, 4%, 98%, 0.3);',
    width: '30%',
    color: theme.palette.primary.light,
    fontSize: 16,
    textShadow: '2px 2px 3px black',          
    borderCollapse: 'collapse',
  },
}))(TableCell);

function HomeTabMobile({ transactions }) {
    function getRandomColor() {
    const colors = ['#0091ea', '#004d40', '#cddc39', '#76ff03', '#c6ff00', '#ef6c00', '#ffff00', '#bdbdbd'];
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
};
  return (
    <>     
          {transactions === null ? (
            <StyledTableRow>No transactions yet</StyledTableRow> 
          ) : (
            <>
              {transactions.map(transaction => (
                      <TableContainer style={{ color: '#d2bde8', display: 'flex', flexDirection: 'column', boxShadow: ' 0px 0px 50px 19px rgba(134, 9, 249, 0.47)',  backgroundColor: 'transparent' , margin: '20px auto', maxWidth: '400px'}} component={Paper}>

                           <Table key={transaction._id} > 
                          <TableBody>
                              <TableCell style={{ maxWidth: '10px', backgroundColor: getRandomColor()}}></TableCell>
                                <TableCell >
                                  <StyledTableRow>
                                  
                                              <StyledTableHeadCell align="left">
                                                  Date
                                              </StyledTableHeadCell>
                                              <StyledTableCell align="right">
                                                  {transaction.date}
                                              </StyledTableCell>
                                    </StyledTableRow>
                                          <StyledTableRow >
                                              <StyledTableHeadCell align="left">
                                                  Type
                                              </StyledTableHeadCell>
                                              <StyledTableCell align="right">
                                                  {transaction.type}
                                              </StyledTableCell>
                                          </StyledTableRow>

                                          <StyledTableRow>
                                              <StyledTableHeadCell align="left">
                                                  Category
                                              </StyledTableHeadCell>
                                              <StyledTableCell align="right">
                                                  {transaction.category}
                                              </StyledTableCell>
                                          </StyledTableRow>
                                          <StyledTableRow>
                                              <StyledTableHeadCell align="left">
                                                  Comment
                                              </StyledTableHeadCell>
                                              <StyledTableCell align="right">
                                                  {transaction.comment}
                                              </StyledTableCell>
                                          </StyledTableRow>
                                          <StyledTableRow>
                                              <StyledTableHeadCell align="left">
                                                  Sum
                                              </StyledTableHeadCell>
                                              <StyledTableCell align="right">
                                                  {transaction.sum}
                                              </StyledTableCell>
                                          </StyledTableRow>
                                          <StyledTableRow>
                                              < StyledTableHeadCell align="left">
                                                  Balance
                                              </StyledTableHeadCell>
                                              < StyledTableCell align="right">
                                                  {transaction.balance}
                                              </StyledTableCell>
                                          </StyledTableRow>
                              </TableCell>
                                   
                                      </TableBody>                                    
                                  </Table>
                
                                    </TableContainer>
                              ))}
            </>
          )}
    </>
  );
}

export default HomeTabMobile;