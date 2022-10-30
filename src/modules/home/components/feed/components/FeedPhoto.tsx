import { Box, Image } from '@chakra-ui/react';
import { PhotoResponse } from '../../../api/types';

type FeedPhotoProps = {
  photo: PhotoResponse;
  index: number;
};

export const FeedPhoto = ({ photo }: FeedPhotoProps) => {
  return (
    <Box w="300px" h="300px" cursor="pointer" border="1px solid red">
      <Image src={photo.src} alt={photo.title} />
    </Box>
  );
};
