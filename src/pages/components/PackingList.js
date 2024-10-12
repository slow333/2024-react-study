function Item({name, isPacked}){
  return(
      <li className="item">{ isPacked ? <del>{ name + " ✔" }</del>: name + " ❌" } </li>
  )
}

export default function PackingList(){
  return(
      <>
        <h2>나의여행 품목</h2>
        <ul>
          <Item name="옷 가지" isPacked={true}/>
          <Item name="치약, 치솔" isPacked={true}/>
          <Item name="충 전기" isPacked={false}/>
        </ul>
      </>
  )
}

