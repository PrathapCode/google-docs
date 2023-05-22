import './App.css';
import TextEditor from './TextEditor';
import ToolBar from './ToolBar';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">

      <ToolBar></ToolBar>

      <div className='flex-texteditor-sidebar'>
        <TextEditor></TextEditor>
        <SideBar />
      </div>

    </div>
  );
}

export default App;
