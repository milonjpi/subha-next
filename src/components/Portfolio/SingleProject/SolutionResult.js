import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SolutionResult = ({ result }) => {
  return (
    <Box component="section" sx={{ pb: '100px', overflow: 'hidden' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography sx={{ fontSize: { xs: 30, md: 45 }, fontWeight: 700 }}>
              {'Solution & '} <br />
              <Typography
                component="span"
                variant="span"
                sx={{
                  color: '#0066ff',
                  position: 'relative',
                  display: 'inline-block',
                  px: '5px',
                  mx: '5px',
                  '&:after': {
                    position: 'absolute',
                    content: "''",
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '40%',
                    backgroundColor: '#157efb',
                    opacity: '8%',
                  },
                }}
              >
                Result
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography
              sx={{ color: '#666', mb: '20px', fontSize: 14, lineHeight: 2 }}
            >
              {result?.head}
            </Typography>

            <Box sx={{ mt: '50px' }}>
              <Grid container spacing={2}>
                {result?.body.map((item) => (
                  <SolutionItem key={item} solution={item} />
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SolutionResult;

const SolutionItem = ({ solution }) => {
  return (
    <Grid item xs={12} lg={6}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CheckCircleIcon sx={{ color: '#0066ff', mr: 1.5 }} />
        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
          {solution}
        </Typography>
      </Box>
    </Grid>
  );
};
