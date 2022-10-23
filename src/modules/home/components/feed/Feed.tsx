import { Grid } from '@chakra-ui/react';
import { PhotoResponse } from '../api/types';
import { useGetPhoto } from '../hooks/useGetPhoto';
import { FeedPhoto } from './components';

export const Feed = () => {
  const { data } = useGetPhoto();

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {data?.data.map((photo: PhotoResponse, index: number) => (
        <FeedPhoto key={index} photo={photo} index={index} />
      ))}
    </Grid>
  );
};
