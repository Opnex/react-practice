import "./profile.css";

function Profile(props) {
    return (
        <div className="profile-card">
            <img src={props.image}
                 alt={props.name}
            />

            <h2>{props.name}</h2>
            <h2>{props.role}</h2>
            <h2>{props.bio}</h2>
        </div>
    )
}

export default Profile