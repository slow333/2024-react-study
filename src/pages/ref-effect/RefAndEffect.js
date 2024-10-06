import {Link, Outlet} from "react-router-dom";

function RefAndEffect() {
  return (
      <div className='main'>
        <Outlet/>
      </div>
  )
}

function Detail1() {
  return (
      <div>
        <h2>Detail1</h2>
        <p><Link to="/">Go to the home page</Link></p>
      </div>
  );
}

function Detail2() {
  return (
      <div>
        <h2>Detail2</h2>
        <p><Link to="/">Go to the home page</Link></p>
      </div>
  );
}

function Detail3() {
  return (
      <div>
        <h2>Detail3</h2>
        <p><Link to="/">Go to the home page</Link></p>
      </div>
  );
}

export default RefAndEffect;
export {Detail1, Detail2, Detail3}