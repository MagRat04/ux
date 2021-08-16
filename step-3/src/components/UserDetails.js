const UserDetails = ({ details }) => {
  return (
    <div>
      <h1>Details for {details.firstName}</h1>

      <article className="card details">
        <div className="card__media">
          <img
            id="avatar"
            src={details.avatar}
            alt={`Head shot of ${details.fullName}`}
          />
        </div>
        <div className="card__content">
          <h2 className="user__name">{details.fullName}</h2>
          <p className="user__email">{details.email}</p>
          <p className="user__bio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sunt totam distinctio commodi veniam? Mollitia ut ipsa in numquam
            sunt molestiae! Eligendi blanditiis ut odit praesentium, quisquam at
            excepturi molestias!
          </p>
        </div>
      </article>
    </div>
  );
};
export default UserDetails;
