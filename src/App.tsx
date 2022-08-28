import { Task } from './Components/Task/Task';
import { Header } from './Components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';
import { ToastContainer } from 'react-toastify';
import { TaskProvider } from './hooks/useTask';

function App() {

  return (
    <TaskProvider >
        <Header />
        <div className='content_container'>
          <Task />
        </div>
        <ToastContainer autoClose={2000}/>
    </TaskProvider>
    
  )
}

export default App
