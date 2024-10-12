import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./pages/common/Home";
import SubMainUi from "./pages/ui/SubMainUi";
import StateMgmt from "./pages/StateMgmt/StateMgmt";
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

export default function Router() {
  return (
      <div>
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
            </Route>
            <Route path="state-mgmt" element={<StateMgmt/>}/>
            <Route path="ref-effect" element={<RefAndEffect/>}>
              <Route index element={<Detail1/>}/>
              <Route path="detail1" element={<Detail1/>}/>
              <Route path="detail2" element={<Detail2/>}/>
              <Route path="detail3" element={<Detail3/>}/>
            </Route>
            <Route path="*" element={<Memos/>}/>
          </Route>
        </Routes>
      </div>
  );
}

function Layout() {
  let initialShow = [
    {id: '0', isShow: false},
    {id: '1', isShow: false},
    {id: '2', isShow: false},
    {id: '3', isShow: false},
  ];

  const [shows, getShows] = useState(initialShow);

  useEffect(() => {
    const main = document.querySelector(".main");
    const isShow = shows.find(show => show.isShow === true);

    (isShow) 
      ? main.style.margin = "2.8rem 0 8px 14px" 
      : main.style.margin = "1.4rem 0 8px 14px";
  }, [shows]);

  function toggleShow(e) {
    getShows(shows.map((show) =>
        show.id === e.target.getAttribute('value')
            ? {...show, isShow: !show.isShow}
            : {...show, isShow: false}
    ));
  }

  function getId(num){ return shows[num].id }
  function getShow(num){ return shows[num].isShow }

  let isShow = (num) => getShow(num) ? "nav-link active" : "nav-link";
  let activeLi = (num) =>
    getShow(num) ? { background: "green", padding: "6px 12px"}
                : { background: "none", padding: "6px 12px"}
  
  return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ui-render"
                      key={shows[0].id} value={shows[0].id}
                      onClick={toggleShow} style={activeLi(0)} >
              UI Render</Link>
              <ul className={isShow(0)}>
                <li><Link to="/ui-render/component">Component Sample</Link></li>
                <li><Link to="/ui-render/jsx-markup">jsx-markup</Link></li>
                <li><Link to="/ui-render/props-injection">props 전달</Link></li>
                <li><Link to="/ui-render/how-rendering">how rendering</Link></li>
                <li><Link to="/ui-render/ui-tree">UI Tree</Link></li>
              </ul>
            </li>
            <li><Link to="/event-react"
                      key={getId(1)} value={getId(1)}
                      onClick={toggleShow} style={activeLi(1)} >
              Event React</Link>
              <ul className={isShow(1)}>
                <li><Link to="/event-react/event-handle">Event Handle |</Link></li>
                <li><Link to="/event-react/handle-state">Handle State |</Link></li>
                <li><Link to="/event-react/rendering-commit">Rendering And Commit |</Link></li>
                <li><Link to="/event-react/object-state-update">Obj State Update |</Link></li>
              </ul>
            </li>
            <li><Link to="/state-mgmt"
                      key={getId(2)} value={getId(2)}
                      onClick={toggleShow} style={activeLi(2)}>
              State Management</Link>
              <ul className={isShow(2)}>
                <li><Link to="/state-mgmt/detail1">detail1</Link></li>
                <li></li>
              </ul>
            </li>
            <li><Link to="/ref-effect"
                      key={getId(3)} value={getId(3)}
                      onClick={toggleShow} style={activeLi(3)}>
              ref and effect</Link>
              <ul className={isShow(3)}>
                <li><Link to="/ref-effect/detail1">1111</Link></li>
                <li><Link to="/ref-effect/detail2">2222</Link></li>
                <li><Link to="/ref-effect/detail3">3333</Link></li>
              </ul>
            </li>
            <li><Link to="/nothing-here">Memos</Link></li>
          </ul>
        </nav>
        <Outlet/>
      </div>
  );
}

/** let linkInActive =  { display: 'none', position: 'absolute', top: '40px',  left: '50%',
*  right: 'auto',  transform: 'translateX(-50%)',  padding:' 6px 0 4px 2rem', margin: '0',
*  width: '100%',  listStyle: 'none',  gap: '1.3rem',  textAlign: 'center'};
*  let linkActive = {...linkInActive, display: 'flex', background: 'orangered', color: 'whitesmoke', border:'1px solid yellow'};
*/