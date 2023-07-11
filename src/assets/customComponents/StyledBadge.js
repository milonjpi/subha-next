import styled from '@emotion/styled';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -7,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
    fontSize: 10,
    background: 'linear-gradient(to right, #0c3df4 0%, #02b5ff 100%)',
  },
}));

export default StyledBadge;
