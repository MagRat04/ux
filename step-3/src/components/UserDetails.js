import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetails(props) {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState(undefined);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      const userData = await response.json();
      setSingleUser(userData);
    };

    getUser();
  }, []);
  console.log(singleUser);

  return (
    <>
      {singleUser ? (
        <>
          <h1>User Details for {id}</h1>
          <img src={singleUser.data.avatar} alt="" />
        </>
      ) : (
        <p>Error loading data</p>
      )}
    </>
  );
}

export default UserDetails;
