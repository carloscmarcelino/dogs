import { Grid } from '@chakra-ui/react';
import { PhotoResponse } from '../../api/types';
import { useGetPhoto } from '../../hooks/useGetPhoto';
import { FeedPhoto } from '../FeedPhoto';

export const Feed = () => {
  const { data } = useGetPhoto();

  return (
    <Grid
      minHeight="80vh"
      w="60vw"
      p="2rem 0"
      m="0 auto"
      gridTemplateColumns="1fr 1fr 1fr"
    >
      {data?.data.map((photo: PhotoResponse, index: number) => (
        <FeedPhoto key={index} photo={photo} index={index} />
      ))}
    </Grid>
  );
};
