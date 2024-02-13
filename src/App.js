import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Box, Button, Card, Grid, colors } from '@mui/material';
import { blueGrey, deepOrange, red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function App() {
  const [open, setOpen] = useState(false);
 
  const handleClickToOpen = () => {
        setOpen(true);
    };
 
  const handleToClose = () => {
        setOpen(false);
    };


  const seq_colors = ["#ED33E5", "#4561DF", "#E61C4C", "#F88134", "#40D2F4"
                    ,"#3FB64E", "#C4EE44", "#FDE119", "#911EB0"]

  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  function set_alltodef(){
    setColor1("#479991")
    setColor2("#479991")
    setColor3("#479991")
    setColor4("#479991")
    setColor5("#479991")
    setColor6("#479991")
    setColor7("#479991")
    setColor8("#479991")
    setColor9("#479991")
  }

  const shuffled = shuffle(seq_colors);
  const rand_index = shuffle(index);

  const [count, setCount] = useState(0);
  const [sequence, setSequence] = useState(shuffled);
  const [indices, setIndices] = useState(rand_index);

  const [btn1_color, setColor1] = useState("#479991")
  
  const [btn2_color, setColor2] = useState("#479991")

  const [btn3_color, setColor3] = useState("#479991")

  const [btn4_color, setColor4] = useState("#479991")

  const [btn5_color, setColor5] = useState("#479991")

  const [btn6_color, setColor6] = useState("#479991")

  const [btn7_color, setColor7] = useState("#479991")

  const [btn8_color, setColor8] = useState("#479991")

  const [btn9_color, setColor9] = useState("#479991")

  const button_press1 = () => {
    if(count == 8){
      set_alltodef();
      setOpen(true);
      setCount(0);
      setSequence(shuffled)
      setIndices(rand_index)
    }

    if(count != indices[0]){
      setCount(0)
      set_alltodef();
    } else {
      setCount(count + 1);
      setColor1(sequence[indices[0]])
      console.log(sequence[indices[0]])
      console.log(indices[0])
      console.log(count) 
    }
  };

  const button_press2 = () => {
    if(count == 8){
      set_alltodef();
      setOpen(true);
      setCount(0);
      setSequence(shuffled)
      setIndices(rand_index)
    }

    if(count != indices[1]){
      setCount(0)
      set_alltodef();
    } else {
      setCount(count + 1);
      setColor2(sequence[indices[1]])
      console.log(sequence[indices[1]])
      console.log(indices[1])
      console.log(count) 
    }
  };

  const button_press3 = () => {
    if(count == 8){
      set_alltodef();
      setOpen(true);
      setCount(0);
      setSequence(shuffled)
      setIndices(rand_index)
    }

    if(count != indices[2]){
      setCount(0)
      set_alltodef();
    } else {
      setCount(count + 1);
      setColor3(sequence[indices[2]])
      console.log(sequence[indices[2]])
      console.log(indices[2])
      console.log(count) 
    }
  }

  const button_press4 = () => {
    if(count == 8){
      set_alltodef();
      setOpen(true);
      setCount(0);
      setSequence(shuffled)
      setIndices(rand_index)
    }

    if(count != indices[3]){
      setCount(0)
      set_alltodef();
    } else {
      setCount(count + 1);
      setColor4(sequence[indices[3]])
      console.log(sequence[indices[3]])
      console.log(indices[3])
      console.log(count) 
    }
  };

  const button_press5 = () => {
    if(count == 8){
      set_alltodef();
      setOpen(true);
      setCount(0);
      setSequence(shuffled)
      setIndices(rand_index)
    }

    if(count != indices[4]){
      setCount(0)
      set_alltodef();
    } else {
      setCount(count + 1);
      setColor5(sequence[indices[4]])
      console.log(sequence[indices[4]])
      console.log(indices[4])
      console.log(count) 
    }
  };

  const button_press6 = () => {
    if(count == 8){
      set_alltodef();
      setOpen(true);
      setCount(0);
      setSequence(shuffled)
      setIndices(rand_index)
    }

    if(count != indices[5]){
      setCount(0)
      set_alltodef();
    } else {
      setCount(count + 1);
      setColor6(sequence[indices[5]])
      console.log(sequence[indices[5]])
      console.log(indices[5])
      console.log(count) 
    }
  };

  const button_press7 = () => {
    if(count == 8){
      set_alltodef();
      setOpen(true);
      setCount(0);
      setSequence(shuffled)
      setIndices(rand_index)
    }

    if(count != indices[6]){
      setCount(0)
      set_alltodef();
    } else {
      setCount(count + 1);
      setColor7(sequence[indices[6]])
      console.log(sequence[indices[6]])
      console.log(indices[6])
      console.log(count) 
    }
  };

  const button_press8 = () => {
    if(count == 8){
      set_alltodef();
      setOpen(true);
      setCount(0);
      setSequence(shuffled)
      setIndices(rand_index)
    }

    if(count != indices[7]){
      setCount(0)
      set_alltodef();
    } else {
      setCount(count + 1);
      setColor8(sequence[indices[7]])
      console.log(sequence[indices[7]])
      console.log(indices[7])
      console.log(count) 
    }
  };

  const button_press9 = () => {
    if(count == 8){
      set_alltodef();
      setOpen(true);
      setCount(0);
      setSequence(shuffled)
      setIndices(rand_index)
    }

    if(count != indices[8]){
      setCount(0)
      set_alltodef();
    } else {
      setCount(count + 1);
      setColor9(sequence[indices[8]])
      console.log(sequence[indices[8]])
      console.log(indices[8])
      console.log(count) 
    }
  };


  const [new_seq, setNewSeq] = useState(seq_colors);
  
  const handleColorChange = () => {
    const shuffledColors = shuffle(seq_colors);
    setNewSeq(shuffledColors);
  };

  return (
    <div>

             <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"How are you?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        I am Good, Hope the same for you!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            

      <Box 
      sx={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
      }}>
      <Grid container>
        <Grid>
          <Card variant='outlined'
          sx={{
            backgroundColor: sequence[0]
          }}>new_seq[0]</Card>
          <Card variant='outlined'
          sx={{
            backgroundColor: sequence[1]
          }}>new_seq[1]</Card><Card variant='outlined'
          sx={{
            backgroundColor: sequence[2]
          }}>new_seq[2]</Card><Card variant='outlined'
          sx={{
            backgroundColor: sequence[3]
          }}>new_seq[3]</Card><Card variant='outlined'
          sx={{
            backgroundColor: sequence[4]
          }}>new_seq[4]</Card><Card variant='outlined'
          sx={{
            backgroundColor: sequence[5]
          }}>new_seq[5]</Card><Card variant='outlined'
          sx={{
            backgroundColor: sequence[6]
          }}>new_seq[6]</Card><Card variant='outlined'
          sx={{
            backgroundColor: sequence[7]
          }}>new_seq[7]</Card><Card variant='outlined'
          sx={{
            backgroundColor: sequence[8]
          }}>new_seq[8]</Card>
        </Grid>
        <Grid>
        <Button 
          variant="contained"
          onClick={button_press1}
          sx={{
            bgcolor: btn1_color,
            "&:hover": { bgcolor: '#1665C1'}
            }}>

            Contained

            </Button>

            <Button 
          variant="contained"
          onClick={button_press2}
          sx={{
            bgcolor: btn2_color,
            "&:hover": { bgcolor: '#1665C1'}
            }}>

            Contained

          </Button>

          <Button 
          variant="contained"
          onClick={button_press3}
          sx={{
            bgcolor: btn3_color,
            "&:hover": { bgcolor: '#1665C1'}
            }}>

            Contained

          </Button>
        </Grid>
          
        
        <Grid>
        <Button 
          variant="contained"
          onClick={button_press4}
          sx={{
            bgcolor: btn4_color,
            "&:hover": { bgcolor: '#1665C1'}
            }}>

            Contained

          </Button>

          <Button 
          variant="contained"
          onClick={button_press5}
          sx={{
            bgcolor: btn5_color,
            "&:hover": { bgcolor: '#1665C1'}
            }}>

            Contained

          </Button>

          <Button 
          variant="contained"
          onClick={button_press6}
          sx={{
            bgcolor: btn6_color,
            "&:hover": { bgcolor: '#1665C1'}

            }}>

            Contained

          </Button>
          </Grid>

          <Grid>
          <Button 
          variant="contained"
          onClick={button_press7}
          sx={{
            bgcolor: btn7_color,
            "&:hover": { bgcolor: '#1665C1'}

            }}>

            Contained

          </Button>

          <Button 
          variant="contained"
          onClick={button_press8}
          sx={{
            bgcolor: btn8_color,
            "&:hover": { bgcolor: '#1665C1'}

            }}>

            Contained

          </Button>

          <Button 
          variant="contained"
          onClick={button_press9}
          sx={{
            bgcolor: btn9_color,
            "&:hover": { bgcolor: '#1665C1'}

            }}>

            Contained

          </Button>
        </Grid>
        
          
          
      </Grid>
      </Box>
    </div>
  );
}

export default App;