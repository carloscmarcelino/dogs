import { GridItem, Image, Text } from '@chakra-ui/react';
import { PhotoResponse } from '../../api/types';

type FeedPhotoProps = {
  photo: PhotoResponse;
  index: number;
};

export const FeedPhoto = ({ photo, index }: FeedPhotoProps) => {
  return (
    <GridItem rowSpan={1} colSpan={1}>
      <Image src={photo.src} alt={photo.title} />

      <Text as="span">{photo.acessos}</Text>
    </GridItem>
  );
};
