import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./pages/Home";
import UiRender from "./pages/ui/UiRender";
import StateUsage from "./pages/StateUsage";
import StateMgmt from "./pages/StateMgmt";
import RefAndEffect, {Detail1, Detail2, Detail3} from "./pages/ref-effect/RefAndEffect";
import NoMatch from "./pages/NoMatch";
import FirstComponent from "./pages/ui/FirstComponent";
import ImportExport from "./pages/ui/ImportExport";
import JsxMarkup from "./pages/ui/JsxMarkup";
import JsxScript from "./pages/ui/JsxScript";
import {useState} from "react";

export default function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="ui-render" element={<UiRender/>}>
              <Route index element={<FirstComponent/>}/>
              <Route path='component' element={<FirstComponent/>}/>
              <Route path='import-export' element={<ImportExport/>}/>
              <Route path='jsx-markup' element={<JsxMarkup/>}/>
              <Route path='jsx-script' element={<JsxScript/>}/>
            </Route>
            <Route path="state" element={<StateUsage/>}/>
            <Route path="state-mgmt" element={<StateMgmt/>}/>
            <Route path="ref-effect" element={<RefAndEffect/>}>
              <Route index element={<Detail1/>}/>
              <Route path="detail1" element={<Detail1/>}/>
              <Route path="detail2" element={<Detail2/>}/>
              <Route path="detail3" element={<Detail3/>}/>
            </Route>
            <Route path="*" element={<NoMatch/>}/>
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

  const [menuShow, setMenuShow] = useState(false);
  const [menuShow1, setMenuShow1] = useState(false);
  function toggleShow(e) {
    setShows(shows.map((show) =>
        show.id === e.target.getAttribute('value')
            ? {...show, isShow: !show.isShow}
            : {...show, isShow: false}
    ))
  }
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
                <li><Link to="/ui-render/component">첫번째 Component</Link></li>
                <li><Link to="/ui-render/import-export">import/export</Link></li>
                <li><Link to="/ui-render/jsx-markup">jsx-markup</Link></li>
                <li><Link to="/ui-render/jsx-script">jsx-script</Link></li>
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
            <li><Link to="/nothing-here">Nothing Here</Link></li>
          </ul>
        </nav>
        <Outlet/>
      </div>
  );
}