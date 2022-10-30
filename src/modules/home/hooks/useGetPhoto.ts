import { useQuery } from '@tanstack/react-query';
import { getPhotos } from '../api';

export const useGetPhoto = () => {
  return useQuery(['get-photo'], getPhotos);
};
