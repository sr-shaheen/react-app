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
import From from './components/From';
import MountingLifecycle from './components/MountingLifecycle';
import UpdatingLifecycle from './components/UpdatingLifecycle';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';

function App() {
  return (
    <div className="App">

      <ClickCounter name="shaheen"/>
      {/* <ErrorBoundary>
        <Hero heroname='Batman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname='joker' />
      </ErrorBoundary> */}

      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}

      {/* <MemoComp name='Shaheen'/> */}
      {/* <PureComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <UpdatingLifecycle /> */}
      {/* <MountingLifecycle/> */}
      {/* <From /> */}
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}


      {/* <h1 className='error'>Error</h1>
        <h1 className={style.success}>Success</h1> */}
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
      {/* </header> */}
    </div>
  );
}

export default App;
