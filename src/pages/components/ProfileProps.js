export default function ProfileProps(){
  return(
      <Avatar width={100} name={"someone"} />
  )
}

function Avatar({name, width}){
  return(
      <img className="avatar"
          src="https://i.imgur.com/1bX5QH6.jpg"
          alt={name}
          width={width}
      />
  )
}