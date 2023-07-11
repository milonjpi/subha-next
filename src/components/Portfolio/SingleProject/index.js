import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import ProjectHead from './ProjectHead';
import OurChallenge from './OurChallenge';
import Screenshot from './Screenshot';
import SolutionResult from './SolutionResult';

const SingleProject = ({ data }) => {
  return (
    <Box component="main" sx={{ pt: '50px' }}>
      <Box>
        <Container maxWidth="lg">
          <ProjectHead data={data} />
          <OurChallenge challenge={data?.challenge} />
          <Screenshot screenshot={data?.screenshot} />
          <SolutionResult result={data?.result} />
        </Container>
      </Box>
    </Box>
  );
};

export default SingleProject;
