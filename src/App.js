import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import TaskCreate from './TaskCreate';

import TaskEdit from './TaskEdit';
import TaskListing from './TaskListing';

function App() {
  return (
    <div className="App">
         <h1>Task manager application </h1>
         <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskListing />}></Route>
          <Route path='/taskmanager/create' element={<TaskCreate/>}></Route>
         
          <Route path='/taskmanager/edit/:taskid' element={<TaskEdit />}></Route>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
