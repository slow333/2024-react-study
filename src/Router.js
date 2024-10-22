import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./pages/common/Home";
import SubMainUi from "./pages/SubMainUi";
import RefAndEffect, {Detail1, Detail2, Detail3} from "./pages/ref-effect/RefAndEffect";
import Memos from "./pages/common/memos";
import ComponentSample from "./pages/ui/ComponentSample";
import JsxMarkup from "./pages/ui/JsxMarkup";
import PropsInjection from "./pages/ui/PropsInjection";
import {useEffect, useState} from "react";
import HowRendering from "./pages/ui/HowRendering";
import UiTree from "./pages/ui/UiTree";
import EventHandle from "./pages/event-react/EventHandle";
import HandleState from "./pages/event-react/HandleState";
import RenderingCommit from './pages/event-react/RenderingCommit';
import ObjectStateUpdate from "./pages/event-react/ObjectStateUpdate";
import ArrayStateUpdate from "./pages/event-react/ArrayStateUpdate";
import HandleInputUseState from "./pages/StateMgmt/HandleInputUseState";
import StateArchitecture from "./pages/StateMgmt/StateArchitecture";
import StateHoisting from "./pages/StateMgmt/StateHoisting";
import StateReducer from "./pages/StateMgmt/StateReducer";

export default function Router() {
   return (<div>
         <Routes>
            <Route path="/" element={<Layout/>}>
               <Route index element={<Home/>}/>
               <Route path="ui-render" element={<SubMainUi/>}>
                  <Route index element={<ComponentSample/>}/>
                  <Route path='component' element={<ComponentSample/>}/>
                  <Route path='jsx-markup' element={<JsxMarkup/>}/>
                  <Route path='props-injection' element={<PropsInjection/>}/>
                  <Route path='how-rendering' element={<HowRendering/>}/>
                  <Route path='ui-tree' element={<UiTree/>}/>
               </Route>
               <Route path="event-react" element={<SubMainUi/>}>
                  <Route index element={<EventHandle/>}/>
                  <Route path='event-handle' element={<EventHandle/>}/>
                  <Route path='handle-state' element={<HandleState/>}/>
                  <Route path='rendering-commit' element={<RenderingCommit/>}/>
                  <Route path='object-state-update' element={<ObjectStateUpdate/>}/>
                  <Route path='array-state-update' element={<ArrayStateUpdate/>}/>
               </Route>
               <Route path="state-mgmt" element={<SubMainUi/>}>
                  <Route index element={<HandleInputUseState/>}/>
                  <Route path='handleInputUseState' element={<HandleInputUseState/>}/>
                  <Route path='state-architecture' element={<StateArchitecture/>}/>
                  <Route path='state-hoisting' element={<StateHoisting/>}/>
                  <Route path='state-reducer' element={<StateReducer/>}/>
               </Route>
               <Route path="ref-effect" element={<SubMainUi/>}>
                  <Route index element={<Detail1/>}/>
                  <Route path="detail1" element={<Detail1/>}/>
                  <Route path="detail2" element={<Detail2/>}/>
                  <Route path="detail3" element={<Detail3/>}/>
               </Route>
               <Route path="*" element={<Memos/>}/>
            </Route>
         </Routes>
      </div>);
}

function Layout() {

   const [index, setIndex] = useState(0);

   return (<div>
         <nav>
            <ul>
               <li className={index === 0 ? 'active': ''}
                  onClick={() => setIndex(0)}>
                  <Link to="/">Home</Link>
               </li>
               <li className={index === 1 ? 'active': ''}
                  onClick={() => setIndex(1)}>
                  <Link to="/ui-render"> UI Render</Link>
                  <ul>
                     <li><Link to="/ui-render/component">
                        Component Sample</Link></li>
                     <li><Link to="/ui-render/jsx-markup">
                        jsx-markup</Link></li>
                     <li><Link to="/ui-render/props-injection">
                        props 전달</Link></li>
                     <li><Link to="/ui-render/how-rendering">
                        how rendering</Link></li>
                     <li><Link to="/ui-render/ui-tree">
                        UI Tree</Link></li>
                  </ul>
               </li>
               <li className={index === 2 ? 'active': ''}
                  onClick={() => setIndex(2)}>
                  <Link to="/event-react">Event React</Link>
                  <ul>
                     <li><Link to="/event-react/event-handle">
                        Event Handle</Link></li>
                     <li><Link to="/event-react/handle-state">
                        Handle State</Link></li>
                     <li><Link to="/event-react/rendering-commit">
                        Rendering And Commit</Link></li>
                     <li><Link to="/event-react/object-state-update">
                        Obj State Update</Link></li>
                     <li><Link to="/event-react/array-state-update">
                        Array State Update</Link></li>
                  </ul>
               </li>
               <li className={index === 3 ? 'active': ''}
                  onClick={() => setIndex(3)}>
                  <Link to="/state-mgmt">State Management</Link>
                  <ul >
                     <li><Link to="/state-mgmt/handleInputUseState">
                        handle input</Link></li>
                     <li><Link to="/state-mgmt/state-architecture">
                        state 구조화</Link></li>
                     <li><Link to="/state-mgmt/state-hoisting">
                        Component 간 state 공유</Link></li>
                     <li><Link to="/state-mgmt/state-reducer">
                        state reducer</Link></li>
                  </ul>
               </li>
               <li className={index === 4 ? 'active': ''}
                  onClick={() => setIndex(4)}>
                  <Link to="/ref-effect" >ref and effect</Link>
                  <ul>
                     <li><Link to="/ref-effect/detail1">
                        1111</Link></li>
                     <li><Link to="/ref-effect/detail2">
                        2222</Link></li>
                     <li><Link to="/ref-effect/detail3">
                        3333</Link></li>
                  </ul>
               </li>
               <li className={index === 5 ? 'active': ''}
                  onClick={() => setIndex(5)}>
                  <Link to="/nothing-here">Memos</Link></li>
            </ul>
         </nav>
         <Outlet/>
      </div>);
}