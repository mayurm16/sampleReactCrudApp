import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router';
import Sidebar from './sidebar/Sidebar';
import Create  from './create/Create';
import Fetch  from './fetch/Fetch';
import Update from './update/Update';
import Delete from './delete/Delete';

const App = () => {
  const Router = createBrowserRouter([{
    path:'/',
    element:<Sidebar/>,
    children:[
      {index:true,
      element:<Create/>
    },{
      path:'/fetch',
      element:<Fetch/>,
    },{
      path:'/update',
      element:<Update/>,
    },{
      path:'/Delete',
      element:<Delete/>,
    }]
  },{

  }]);

  return (<RouterProvider router={Router}/>);
};

export default App;
