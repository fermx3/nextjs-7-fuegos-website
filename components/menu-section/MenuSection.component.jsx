import { Button, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import SectionContainer from '../ui/SectionContainer/SectionContainer.component';

const MenuSection = () => {
  return (
    <SectionContainer>
      <Container maxWidth='lg'>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant='h2'>Menú</Typography>
          <Typography variant='subtitulo2'>Mira nuestro menú...</Typography>
          <Button>Ver menú</Button>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default MenuSection;
