import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OurChallenge = ({ challenge }) => {
  return (
    <Box component="section" sx={{ py: '100px', overflow: 'hidden' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography sx={{ fontSize: { xs: 30, md: 45 }, fontWeight: 700 }}>
              Our <br />
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
                Challenge
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography
              sx={{ color: '#666', mb: '20px', fontSize: 14, lineHeight: 2 }}
            >
              {challenge?.head}
            </Typography>
            <List>
              {challenge?.body.map((item) => (
                <ChallengeList key={item} challenge={item} />
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurChallenge;

const ChallengeList = ({ challenge }) => {
  return (
    <ListItem disableGutters>
      <ListItemIcon sx={{ minWidth: '20px' }}>
        <FiberManualRecordIcon sx={{ color: '#000', fontSize: 5 }} />
      </ListItemIcon>
      <ListItemText
        primary={challenge}
        primaryTypographyProps={{
          fontSize: 14,
          color: '#000',
        }}
      />
    </ListItem>
  );
};
