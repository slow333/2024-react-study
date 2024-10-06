import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./pages/common/Home";
import SubMainUi from "./pages/ui/SubMainUi";
import StateUsage from "./pages/StateUsage";
import StateMgmt from "./pages/StateMgmt";
import RefAndEffect, {Detail1, Detail2, Detail3} from "./pages/ref-effect/RefAndEffect";
import Memos from "./pages/common/memos";
import ComponentSample from "./pages/ui/ComponentSample";
import JsxMarkup from "./pages/ui/JsxMarkup";
import PropsInjection from "./pages/ui/PropsInjection";
import {useEffect, useState} from "react";

export default function App() {
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
            </Route>
            <Route path="state" element={<StateUsage/>}/>
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


  const [shows, setShows] = useState(initialShow);

  useEffect(() => {
    const isShow = shows.find(show => show.isShow === true)
    if(isShow) document.querySelector(".main").style.margin = "2.8rem 0 8px 14px";
    else  document.querySelector(".main").style.margin = "1.4rem 0 8px 14px";
    }, [initialShow]);

  const [menuShow, setMenuShow] = useState(false);
  const [menuShow1, setMenuShow1] = useState(false);
  function toggleShow(e) {
    setShows(shows.map((show) =>
        show.id === e.target.getAttribute('value')
            ? {...show, isShow: !show.isShow}
            : {...show, isShow: false}
    ));
  }
  shows.forEach(show => console.log(show.isShow))
  return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link
                to="/ui-render" key={shows[0].id} value={shows[0].id}
                onClick={(e) => {
                  toggleShow(e)
                }}
            >
              UI Render</Link>
              {/*<ul>*/}
              <ul className={shows[0].isShow ? "nav-link active": "nav-link" }>
                <li><Link to="/ui-render/component">Component Sample</Link></li>
                <li><Link to="/ui-render/jsx-markup">jsx-markup</Link></li>
                <li><Link to="/ui-render/props-injection">props 전달</Link></li>
              </ul>
            </li>
            <li><Link to="/state">useState</Link></li>
            <li><Link to="/state-mgmt">State Management</Link></li>
            <li><Link to="/ref-effect" key={shows[3].id} value={shows[3].id}
                      onClick={(e) => {
                        toggleShow(e)
                      }}
            >
              ref and effect</Link>
              <ul className={shows[3].isShow ? "nav-link active": "nav-link" }>
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