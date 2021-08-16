import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getUser } from "../api/api";
import UserDetails from "../components/UserDetails";

const DetailsPage = () => {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState(undefined);
  useEffect(() => {
    async function getSingleUser() {
      const user = await getUser(id);

      //Make sure api doesn't return an empty object, if so return error
      if (Object.keys(user).length === 0) return;

      const { first_name, last_name, email, avatar } = user.data;
      const formattedData = {
        firstName: first_name,
        avatar,
        email,
        fullName: `${first_name} ${last_name}`,
      };

      setSingleUser(formattedData);
    }
    getSingleUser();
  }, [id]);

  return (
    <div>
      {singleUser ? (
        <>
          <UserDetails details={singleUser} />
        </>
      ) : (
        <p>Error loading data</p>
      )}
    </div>
  );
};

export default DetailsPage;
