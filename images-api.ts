import axios from 'axios';

const apiKey = 'L4X7TW79IAJM06d2QKTzQuX2bT-Nyu_REv4T34nsLSQ';
const baseUrl = 'https://api.unsplash.com/search/photos';

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  description: string | null;
  likes: number;
}

interface FetchImagesResponse {
  results: Image[];
}

export const fetchImages = async (query: string, page: number = 1): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(baseUrl, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: apiKey,
    },
  });
  return response.data;
};