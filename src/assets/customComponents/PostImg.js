import styled from '@emotion/styled';

const PostImg = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  visibility: visible;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.3) rotate(-10deg);
  }
`;

export default PostImg;
