import Image from 'next/image';
import {
  Avatar,
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import StarsRater from '../StartRater/StarsRater.component';
import { ReviewsGrid } from './GoogleReviewsSection.styles';
import SectionContainer from '../ui/SectionContainer/SectionContainer.component';

const GoogleReviewsSection = ({ googleReviews }) => {
  return (
    <SectionContainer>
      <Typography variant='h2' textAlign='center'>
        Nuestros clientes
      </Typography>
      <Container maxWidth='lg'>
        <ReviewsGrid>
          {googleReviews.map((review) => (
            <Card key={review.time} sx={{ position: 'relative' }}>
              <CardContent>
                <Avatar
                  sx={{ margin: 'auto' }}
                  alt={review.author_name}
                  src={review.profile_photo_url}
                />
                <Typography variant='h6'>
                  <Button variant='text' href={review.author_url}>
                    {review.author_name}
                  </Button>
                </Typography>
                <StarsRater rating={review.rating} />
                <Typography variant='body2' fontStyle='italic'>
                  {review.text}
                </Typography>
                <Typography variant='caption'>
                  {review.relative_time_description}
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonBase
                  sx={{ position: 'absolute', bottom: '8px', left: '47%' }}
                  href={review.author_url}
                >
                  <Image
                    src='/images/icons/google.svg'
                    alt='google icon'
                    width={20}
                    height={20}
                  />
                </ButtonBase>
              </CardActions>
            </Card>
          ))}
        </ReviewsGrid>
      </Container>
    </SectionContainer>
  );
};

export default GoogleReviewsSection;
