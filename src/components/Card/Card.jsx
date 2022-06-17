import "./Card.scss"


export default function Card({user}) {
  return (
    <div className="card">
        <img className="profile" src={user.avatar} alt="profilePic" />
        <h1 className="card-title"><b>Username:</b> {user.first_name} {user.last_name}</h1>
        <p className="card-body"><b>Email:</b> {user.email}</p>

    </div>
  )
}
