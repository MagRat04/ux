import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../api/api";

function UserDetails() {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState(undefined);
  useEffect(() => {
    async function getSingleUser() {
      const user = await getUser(id);
      const userData = await user.json();

      const formattedData = {
        ...userData.data,
        fullName: `${userData.data.first_name} ${userData.data.last_name}`,
      };

      setSingleUser(formattedData);
    }
    getSingleUser();
  }, []);

  return (
    <div className="">
      {singleUser ? (
        <>
          <h1>Details for {singleUser.first_name}</h1>
          <article className="card details">
            <div className="card__media">
              <img
                id="avatar"
                src={singleUser.avatar}
                alt={`Head shot of ${singleUser.fullName}`}
              />
            </div>
            <div className="card__content">
              <h2>{singleUser.fullName}</h2>
              <p>{singleUser.email}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita sunt totam distinctio commodi veniam? Mollitia ut ipsa
                in numquam sunt molestiae! Eligendi blanditiis ut odit
                praesentium, quisquam at excepturi molestias!
              </p>
            </div>
          </article>
        </>
      ) : (
        <p>Error loading data</p>
      )}
    </div>
  );
}

export default UserDetails;
