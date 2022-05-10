import { makeStyles, Typography, Box} from '@material-ui/core';
import { Navigate, useNavigate } from 'react-router-dom';
import { COLORS } from '../../../config/material.theme';


function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleWorkStation = () => {
    navigate('/home')
  };

  const handleMeetingRoom = () => {
    navigate('/meetings-room')

  };

  return (
    <Box className={classes.container}>
      <Box>
        <Typography className={classes.title}>
          Reservar estações de trabalho
          </Typography>
        <Box
          onClick={() => handleWorkStation()}
          className={classes.image}
        >
        <img src='./frontend/src/shared/assets/unid-trabalho.svg' alt="unidades de trabalho"  />
        </Box>
      </Box>
      <Box>
        <Typography className={classes.title}>
          Reservar salas de reuniões
        </Typography>
        <Box 
          className={classes.image}
          onClick={() => handleMeetingRoom()}
        >
        <img src="./frontend/src/shared/assets/salas-reuniao.svg" alt="salas de reuniao"  />
        </Box>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles({
  container: {
    height: '30vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '60px',
    marginTop: '20vh',
  },
  image:{
    backgroundColor: COLORS.WHITE.DEFAULT,
    height: '20vh',
    width: '20vh',
    borderWidth: '2px',
    borderColor: COLORS.BLACK.ORIGINAL,
    borderRadius: '8px',
    margin: '20px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  title:{
    color: COLORS.BLACK.ORIGINAL,
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end'
  }
});

export default Home;
