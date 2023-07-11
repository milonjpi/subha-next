import Box from '@mui/material/Box';
import AboutHeader from './AboutHeader';
import MissionVision from './MissionVision';
import TBZMissionVision from './TBZMissionVision';
import TopReason from './TopReason';
import WhoWeAre from './WhoWeAre';

const About = () => {
  return (
    <Box component="section" sx={{ py: '100px' }}>
      <AboutHeader />
      <TopReason />
      <WhoWeAre />
      <MissionVision />
      <TBZMissionVision />
    </Box>
  );
};

export default About;
