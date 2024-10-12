import {getImageUrl} from "./utils/CommonUtils";

function Avatar({person, size}){
  return(
      <img className="avatar"
          src={getImageUrl(person)}
          alt={person.name}
          width={size}
      />
  )
}
function Card({children}){
  return (
      <div className='card'>
        {children}
      </div>
  )
}
export default function ProfileProps(){
  return(
      <Card>
        <Avatar person={{ name: 'Limp', imageId: "MK3eW3A"}}
        size={100}/>
      </Card>
  )
}
