import { Routes, Route } from 'react-router-dom';
import LayoutRequiereAuth from './layout/LayoutRequiereAuth';
import LayoutContainerLogin from './layout/LayoutContainerLogin';
import Home from './pages/Home';
import Login from './pages/Login';
import Skill from './pages/Skill';
import Reference from './pages/Referece';
import NoFound from './pages/NoFound';

function App() {
  return (
    <div className="App bg-gray-800 text-gray-200 w-full">
      <Routes>
        <Route path="/" element={<LayoutRequiereAuth />}></Route>
        <Route path="/" element={<LayoutContainerLogin />}>
          <Route index element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default App;
