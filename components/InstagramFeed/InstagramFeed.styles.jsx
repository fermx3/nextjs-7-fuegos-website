import styled from '@emotion/styled';

export const InstagramFeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: 10px;
  max-width: 920px;
  margin: auto;
`;

export const InstagramPic = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  img {
    object-fit: cover;
  }
`;
