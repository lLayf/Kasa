import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Error from './pages/error/Error.js';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Layout from './layouts/Layout.js';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes> 
      </Layout>
    </Router>
  );
}

export default App;
