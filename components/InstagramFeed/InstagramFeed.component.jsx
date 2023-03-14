import { ButtonBase, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import SectionContainer from '../ui/SectionContainer/SectionContainer.component';

import { InstagramFeedContainer, InstagramPic } from './InstagramFeed.styles';

const InstagramFeed = ({ igPics }) => {
  return (
    <SectionContainer>
      <Container maxWidth='lg' m='auto'>
        <Typography variant='h2' textAlign='center'>
          Instagram
        </Typography>
        <InstagramFeedContainer>
          {igPics.map((image) => (
            <ButtonBase key={image.id} href={image.permalink}>
              <InstagramPic>
                <Image src={image.thumbnail_url} alt='ig mock' fill />
              </InstagramPic>
            </ButtonBase>
          ))}
        </InstagramFeedContainer>
      </Container>
    </SectionContainer>
  );
};

export default InstagramFeed;
