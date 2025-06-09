import { useParams } from 'react-router-dom';

export const DetailsPage = () => {
  const { productId } = useParams();
  return <>DetailsPage id:{productId}</>;
};
