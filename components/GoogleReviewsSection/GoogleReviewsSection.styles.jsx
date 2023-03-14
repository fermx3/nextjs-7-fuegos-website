import styled from '@emotion/styled';

export const ReviewsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
  gap: '15px',
  textAlign: 'center',
});
