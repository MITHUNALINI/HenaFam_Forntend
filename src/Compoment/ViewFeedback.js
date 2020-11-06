import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {  InputAdornment,InputBase,TableContainer} from '@material-ui/core';
import feedbackService from "../services/feedback.service";
import { Feedback } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from "@material-ui/lab";


const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};





const style ={
    // display: 'flex',
    // justifyContent: 'center'
    table: {
          minWidth: 900,
        },
    grid: {
            margin: '35px 150px 20px 50px',
            padding: '10px 10px 10px 10px',
            backgroundColor: "black"
        },
    paper: {
          padding: '10px 10px 10px 10px', 
          margin: '10px 10px 10px 10px',
          position: 'inherit'
        },
    search: {
          position: 'relative',
          align:'left',
          },
}

class ViewFeedback extends Component {

    constructor(props) {
        super(props)
        this.state = {
          page:0,
          rowsPerPage:5,
          FeedbackArr: [],
          count:0,
          ratting:'',
          snackbaropen: false,
          message: null,
          message: null
        }
        
    }

    snackbarclose = (event,reason) =>{
      if(reason ==="clickway"){
        return;
      }
      this.setState({snackbaropen: false});
    }

    componentDidMount(){
      this.reloadFeedbackList();
     
    }
    handleChangePage = (event, newPage) => {
      this.setState({
        page:newPage
      });
      feedbackService.getAllFeedbackInPage(newPage,this.state.rowsPerPage)
      .then((Response) => {
        this.setState({
          FeedbackArr:Response.data.data,
          count:Response.data.TotalNoOfElements
         })
      })
    };

    handleChangeRowsPerPage = (event) => {
      //setRowsPerPage(parseInt(event.target.value, 10));
      this.setState ({
        page:0,
        rowsPerPage:event.target.value
      })
      feedbackService.getAllFeedbackInPage(this.state.page,event.target.value)
      .then((Response) => {
        this.setState({
          FeedbackArr:Response.data.data,
          count:Response.data.TotalNoOfElements
         })
      })
    };
    
    reloadFeedbackList = () => {
      feedbackService.getAllFeedbackInPage(this.state.page,this.state.rowsPerPage)
         .then((Response) => {
           this.setState({
            FeedbackArr:Response.data.data,
             count:Response.data.TotalNoOfElements
            })
         })
    }


    deleteFeedbackByfeedbackId = (FeedbackId) => {
       
      feedbackService.deleteFeedbackByfeedbackId(FeedbackId)
           .then(res => {
               this.setState({
                 message : 'Feedback deleted successfully.',
                 snackbaropen:true,
                });
                // setTimeout(()=> this.ViewFeedback(), 3000) 
               this.setState({
                 FeedbackArr: this.state.FeedbackArr.filter(FeedbackArr => FeedbackArr.feedbackId !== FeedbackId),
                 snackbaropen:true,
                });
           })

    }
    // ViewFeedback = () =>{
    //   this.props.history.push("/admin")
    // }
  

    render() {

        const {row} = this.state;

        return (
          <div>
             <Snackbar open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarclose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
        <Alert onClose={this.snackbarclose} severity="error" variant="filled" style={{position:"fixed",right:"100px",width:'550px',zIndex:3,color:"black"}}>
          {this.state.message}
        </Alert>
      </Snackbar>
               <Grid style={style.grid}>
               <Paper style = {style.paper}>
                   <h1 style={{fontFamily: 'Raleway',fontSize:40}}>View Feedback</h1>
                   <div style={style.search}>
                       <div style={style.searchIcon} style = {{float: 'right',marginBottom:"50px"}}>
                        
                      </div>
                  </div>
                  
                  <TableContainer>
                <Table style={style.table} size="small">
                  <TableHead>
                    <TableRow >
                    
                      <TableCell align="left"><b>FeedbackId</b></TableCell>
                      <TableCell align="left"><b>UserId</b></TableCell>
                      {/* <TableCell align="left"><b>ProductId</b></TableCell> */}
                      <TableCell align="left"><b>Feedback</b></TableCell>
                      <TableCell align="left"><b>Feedbackdate</b></TableCell>
                      <TableCell align="left"><b>Action</b></TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.FeedbackArr.map((row) => (
                      <TableRow>
                        
                       
                        <TableCell align="left">{row.feedbackId}</TableCell>
                        <TableCell align="left">{row.userId}</TableCell>
                        {/* <TableCell align="left">{row.productId}</TableCell> */}
                        <TableCell align="left">{row.feedback}</TableCell>
                        <TableCell align="left">{row.feedbackDate}</TableCell>
                        <TableCell align="left" onClick= {()=>this.deleteFeedbackByfeedbackId(row.feedbackId)}><IconButton ><DeleteIcon  color="default"  inputProps={{ 'aria-label': 'DeleteIcon with default color' }}/></IconButton>
                       <IconButton href="/Eaditproduct" ></IconButton > </TableCell>
                      
                      </TableRow>
                    ))}
                    
                  </TableBody>
                  <TableFooter>
          <TableRow>
            <TablePagination
             rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              // colSpan={3}
              count={this.state.count}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
                </Table>
          
               
              </TableContainer>
          
              
              
                </Paper>
              </Grid>
              </div>
        );
    }

}

export default ViewFeedback;

