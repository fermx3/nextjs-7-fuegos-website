import Image from 'next/image';

import { Paper, Button, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import SectionContainer from '../ui/SectionContainer/SectionContainer.component';

const Hero = () => {
  return (
    <SectionContainer>
      <Container maxWidth='lg'>
        <Stack
          justifyContent='center'
          alignItems='center'
          spacing={2}
          m='auto'
          textAlign='center'
        >
          <Typography variant='h1'>Delicious Mexican Cuisine</Typography>
          <Typography variant='subtitle1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia
            sagittis pharetra. Donec malesuada arcu urna, at congue purus
            maximus nec. Mauris et mauris a leo semper tincidunt.
          </Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' size='large'>
              Contacto
            </Button>
            <Button variant='outlined' size='large' color='secondary'>
              Ver menú
            </Button>
          </Stack>
          <Paper
            sx={{ width: '100vw', height: '50vh', position: 'relative' }}
            elevation={13}
          >
            <Image
              src='/images/hero-img.jpg'
              alt='7 fuegos asador'
              style={{ objectFit: 'cover' }}
              fill
            />
          </Paper>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default Hero;
