import { Stack } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const StarsRater = ({ rating }) => {
  return rating === 5 ? (
    <Stack direction='row' justifyContent='center'>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </Stack>
  ) : (
    <Stack direction='row' justifyContent='center'>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarBorderIcon />
    </Stack>
  );
};

export default StarsRater;
