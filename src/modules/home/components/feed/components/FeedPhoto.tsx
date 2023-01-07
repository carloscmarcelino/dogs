import { Box, Image } from '@chakra-ui/react';
import { PhotoResponse } from '../../../api/types';

type FeedPhotoProps = {
  photo: PhotoResponse;
  index: number;
};

export const FeedPhoto = ({ photo }: FeedPhotoProps) => {
  return (
    <Box h="300px" w="300px" cursor="pointer">
      <Image src={photo.src} alt={photo.title} w="100%" h="100%" />
    </Box>
  );
};
