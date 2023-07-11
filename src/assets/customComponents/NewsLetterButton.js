import styled from '@emotion/styled';

const NewsLetterButton = styled.button`
  border: 0;
  padding: 11px 22px;
  color: #fff;
  vertical-align: center;
  cursor: pointer;
  position: relative;
  background-image: linear-gradient(to right, #0c3df4 0%, #02b5ff 100%);
  border-radius: 0 5px 5px 0;
  z-index: 1;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right, #02b5ff 0%, #0c3df4 100%);
    border-radius: 0 5px 5px 0;
    z-index: -1;
    transition: opacity 0.25s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
`;

export default NewsLetterButton;
