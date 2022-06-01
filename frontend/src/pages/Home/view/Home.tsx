import { makeStyles, Typography, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../config/material.theme';
import IconeUnidTrabalho from '../../../shared/assets/unid-trabalho.svg';
import IconeSalasReuniao from '../../../shared/assets/salas-reuniao.svg';

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleWorkStation = () => {
    navigate('/work-unit');
  };

  const handleMeetingRoom = () => {
    navigate('/meetings-room');
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.containerImage}>
        <Typography className={classes.title}>
          Reservar estações de trabalho
        </Typography>
        <Box onClick={() => handleWorkStation()} className={classes.image}>
          <img src={IconeUnidTrabalho} alt="unidades de trabalho" />
        </Box>
      </Box>
      <Box className={classes.containerImage}>
        <Typography className={classes.title}>
          Reservar salas de reuniões
        </Typography>
        <Box className={classes.image} onClick={() => handleMeetingRoom()}>
          <img src={IconeSalasReuniao} alt="salas de reuniao" />
        </Box>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles({
  container: {
    height: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '60px',
  },
  containerImage: {
    display: 'grid',
    justifyItems: 'center',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE.DEFAULT,
    height: '28vh',
    width: '31vh',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.BLACK.ORIGINAL,
    borderRadius: '10px',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
    margin: '20px',
    transition: 'background-color 0.3s',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: `${COLORS.BLUE.TRANSPARENT_A}`,
    },
    '& img': {
      maxHeight: '230px',
      padding: '30px',
    }
  },
  title: {
    color: COLORS.BLACK.ORIGINAL,
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
  },
});

export default Home;
