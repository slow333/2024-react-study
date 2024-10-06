import {Link, Outlet, Route} from "react-router-dom";
import FirstComponent from "./FirstComponent";

export default function UiRender() {
  return (
      <div className='main'>
        <Outlet/>
      </div>
  )
}