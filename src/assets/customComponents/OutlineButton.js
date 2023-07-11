import styled from '@emotion/styled';

const OutlineButton = styled.button`
  border: 0;
  padding: 12px 25px;
  font-weight: 500;
  border-radius: 5px;
  color: #f8f9fa;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  border: 1px solid #f8f9fa;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 5px;
    color: #fff;
    background-color: #0066ff;
    z-index: -1;
    transition: all 0.5s ease-in-out;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    border: 1px solid #0066ff;
  }
`;

export default OutlineButton;
