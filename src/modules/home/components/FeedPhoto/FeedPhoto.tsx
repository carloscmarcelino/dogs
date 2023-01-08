import { PhotoResponse } from '@/modules/home/api/types';
import { Box, Image } from '@chakra-ui/react';

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
