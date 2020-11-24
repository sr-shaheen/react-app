/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Count from './components/Counter'
import FunctionClick from './components/FunctionClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreting from './components/UserGreting';
import PersonList from './components/PersonList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';

import './appStyles.css'
import style from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='error'>Error</h1>
        <h1 className={style.success}>Success</h1>
        {/* <Inline></Inline> */}
        {/* <StyleSheet primary={true} /> */}
        {/* <PersonList/> */}
        {/* <UserGreting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <FunctionClick/>
        <Count value='1'></Count>
        <Message></Message>

        <Greet name="Shaheen"><p>This is children component</p></Greet>

        <Welcome name="React App"></Welcome>
        <Hello></Hello> */}
      </header>
    </div>
  );
}

export default App;
