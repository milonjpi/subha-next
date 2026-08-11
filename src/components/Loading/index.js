import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';

const Loading = ({ loading }) => {
  return (
    <Box id="preloader" className={!loading ? 'isDone' : ''}>
      {/* <LinearProgress
        sx={{
          width: '300px',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          zIndex: 999999999,
          color: '#fff',
          height: '2px',
        }}
      /> */}

      <div className="preloader-spin"></div>
    </Box>
  );
};

export default Loading;
