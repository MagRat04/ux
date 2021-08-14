import React from "react";
import { Link } from "react-router-dom";
import { BiInfoCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

function User({ data }) {
  const { first_name, last_name, id, avatar } = data;
  const userName = `${first_name} ${last_name}`;
  return (
    <article className="card cell">
      <header className="card__header">
        <img src={avatar} height="100" width="100" alt="headshot of contact" />
        <div className="card__actions">
          <Link to={`/users/${id}`}>
            <BiInfoCircle
              className="action__icon icon"
              role="img"
              aria-hidden="true"
            />
            See details
          </Link>
        </div>
      </header>
      <div className="card__content">
        <h2>{userName}</h2>
      </div>
      <footer>
        <div className="card__tag">
          <FaUser className="tag__icon icon" role="img" aria-hidden="true" />
          ID: {id}
        </div>
      </footer>
    </article>
  );
}

export default User;
