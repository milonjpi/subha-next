import styled from '@emotion/styled';

const BlackButton = styled.button`
  border: 0;
  padding: 15px 35px;
  font-weight: 500;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  cursor: pointer;
  position: relative;
  background-color: #212529;
  z-index: 1;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 5px;
    background-color: #0066ff;
    z-index: -1;
    transition: opacity 0.25s ease-in-out;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
`;

export default BlackButton;
