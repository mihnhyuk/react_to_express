import { Routes, BrowserRouter, Route} from 'react-router-dom';
import routes from './routes';
import Nav from './components/base/Nav'

function App() {
  return (
    <>
      <Nav />
      <div>
        <div>
          <Routes>
          {
            routes.map((item,index) => <Route key={index} path={item.path} element={<item.element />} />)
          }
          </Routes>
        </div>
      </div>
    </>
  );
}


export default App;
