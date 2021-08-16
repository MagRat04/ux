// Get All Users
export const getUsers = async () => {
  try {
    const result = await fetch("https://reqres.in/api/users/");
    const users = await result.json();
    return users;
  } catch (error) {
    return error;
  }
};

// Get User By ID
export const getUser = async (id) => {
  try {
    const result = await fetch(`https://reqres.in/api/users/${id}`);
    const user = await result.json();
    return user;
  } catch (error) {
    return error;
  }
};
