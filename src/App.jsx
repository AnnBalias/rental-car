import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
