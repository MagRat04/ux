import React from "react";
import { Link } from "react-router-dom";

function User({ user }) {
  const userName = user.user.first_name + " " + user.user.last_name;
  return (
    <article className="card">
      <header className="card__header">
        <img
          src={user.user.avatar}
          height="100"
          width="100"
          alt="headshot of contact"
        />
        <div className="card__actions">
          <span className="icon icon--email" role="img" aria-hidden="true">
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
          </span>
          <Link to={`/users/${user.user.id}`}>See Details</Link>
        </div>
      </header>
      <div className="card__content">
        <h1>{userName}</h1>
      </div>
      <footer>
        <div className="card__tag">
          <span className="tag__icon">
            <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
              />
            </svg>
          </span>
          {user.user.id}
        </div>
      </footer>
    </article>
  );
}

export default User;
