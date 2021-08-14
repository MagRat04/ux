// Get All Users
export const getUsers = async () => {
  return fetch("https://reqres.in/api/users/");
};

// Get User By ID
export const getUser = async (id) => {
  return fetch(`https://reqres.in/api/users/${id}`);
};
