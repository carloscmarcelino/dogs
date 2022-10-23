import { Flex, Grid } from '@chakra-ui/react';
import { PhotoResponse } from '../api/types';
import { useGetPhoto } from '../hooks/useGetPhoto';
import { FeedPhoto } from './components';

export const Feed = () => {
  const { data } = useGetPhoto();

  return (
    <Flex minHeight="80vh" w="60vw" p="2rem 0" m="0 auto" border="1px solid red">
      {data?.data.map((photo: PhotoResponse, index: number) => (
        <FeedPhoto key={index} photo={photo} index={index} />
      ))}
    </Flex>
  );
};
