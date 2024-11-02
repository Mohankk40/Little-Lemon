import { Route, Routes } from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import UnderConstruction from './components/pages/UnderConstruction'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('about').path}
          element={<UnderConstruction />} />

          <Route path={pages.get('menu').path} 
          element={<UnderConstruction />} />

          <Route path={pages.get('orderOnline').path}
          element={<UnderConstruction />} />

          <Route path={pages.get('login').path} 
          element={<UnderConstruction />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
