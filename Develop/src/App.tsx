import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavTabs from './components/Nav';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const {pathname} = location;
  const current = pathname;
  const handle = (pageName: String) => {
    navigate(`${pageName}`)
  };
  return (
    <>
      <NavTabs currentPage = {current} handlePageChange= {handle} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
