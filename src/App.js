/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
import { Greet } from './components/basic/Greet';
import Welcome from './components/basic/Welcome'
import Hello from './components/basic/Hello'
import Message from './components/basic/Message'
import Count from './components/basic/Counter'
import FunctionClick from './components/basic/FunctionClick'
import EventBind from './components/basic/EventBind';
import ParentComponent from './components/parent-child/ParentComponent';
import UserGreting from './components/basic/UserGreting';
import PersonList from './components/parent-child/PersonList';
import StyleSheet from './components/style-css/StyleSheet';
import Inline from './components/style-css/Inline';

import './appStyles.css'
import style from './appStyles.module.css'
import From from './components/froms/From';
import MountingLifecycle from './components/life-cycle/MountingLifecycle';
import UpdatingLifecycle from './components/life-cycle/UpdatingLifecycle';
import FragmentDemo from './components/fragments/FragmentDemo';
import Table from './components/fragments/Table';
import PureComp from './components/pure-components/PureComp';
import MemoComp from './components/memo/MemoComp';
import RefsDemo from './components/refs/RefsDemo';
import FocusInput from './components/refs/FocusInput';
import FRParentInput from './components/refs/FRParentInput';
import PortalDemo from './components/portals/PortalDemo';
import Hero from './components/error-boundary/Hero';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import ClickCounter from './components/higher-order/ClickCounter';
import Counter from './components/render-props/Counter';
import ClickCounterTwo from './components/render-props/ClickCounterTwo';
import ComponentC from './components/contex/ComponentC';
import { UserProvider } from './components/contex/UserContext';
import PostList from './components/http/PostList';
import PostFrom from './components/http/PostFrom';

function App() {
  return (
    <div className="App">
      <PostFrom />
      {/* <PostList /> */}
      {/* <UserProvider value='Shaheen '>
      <ComponentC/>
      </UserProvider> */}
      {/* <Counter incrementValue="5">{(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>}</Counter> */}

      {/* <Counter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>} /> */}

      {/* <ClickCounter name="shaheen"/> */}
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
