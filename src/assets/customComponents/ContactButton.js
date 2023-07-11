import styled from '@emotion/styled';
import ButtonBase from '@mui/material/ButtonBase';

const ContactButton = styled(ButtonBase)`
  background: #157efb;
  box-shadow: 0px 4px 0px 0px #5842bc;
  filter: drop-shadow(0 13px 20px #07397235);
  padding: 12px 30px;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  border-radius: 50rem;
  color: #f8f9fa;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #4a00e1;
    box-shadow: 0px 4px 0px 0px #5842bc;
  }
`;

export default ContactButton;
