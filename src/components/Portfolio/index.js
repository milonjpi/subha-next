import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import PageHeader from '../../assets/preComponents/PageHeader';
import { projectTag, projectData } from '../../assets/data';
import ProjectSlide from '../Home/Portfolio/ProjectSlide';
import { useState } from 'react';

const Portfolio = () => {
  const [tag, setTag] = useState('');
  const handleTag = (data) => {
    setTag(data);
  };
  return (
    <Box
      component="section"
      sx={{
        py: '100px',
        background: 'linear-gradient(to top, #0066ff12, #0066ff01)',
      }}
    >
      <Container maxWidth="lg">
        <PageHeader
          titleLeft="Our"
          titleRight="Projects"
          subTitle="We have an experienced team of production and inspection personnel
          to ensure quality."
          mb="60px"
        />
        <Box sx={{ textAlign: 'center', mb: '50px' }}>
          {projectTag.map((item) => (
            <ButtonBase
              key={item.value}
              disableRipple
              disableTouchRipple
              onClick={() => handleTag(item.value)}
              sx={{
                fontWeight: 700,
                textTransform: 'capitalize',
                m: '10px',
                px: '3px',
                fontSize: 'inherit',
                color: tag === item.value ? '#0066ff' : 'inherit',
              }}
            >
              {item.title}
            </ButtonBase>
          ))}
        </Box>
        <Box>
          <Grid container spacing={3}>
            {projectData.map((item) => (
              <Grid key={item.id} item xs={12} md={6} lg={4}>
                <ProjectSlide data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
