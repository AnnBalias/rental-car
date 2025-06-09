import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const DetailsPage = () => {
  const { productId } = useParams();
  return (
    <>
      <Header />
      DetailsPage id:{productId}
    </>
  );
};
