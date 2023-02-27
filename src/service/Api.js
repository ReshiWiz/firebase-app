import axios from "axios";

// const navigate = useNavigate();
const URL = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("some thing wrong oops", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/userinfo`);
  } catch (error) {
    console.log("error while calling get users API:", error);
    // navigate("/warning");
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("error while calling get users API:", error);
  }
};

export const editUser = async (user, id) => {
  try {
    console.log(id);
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("error while calling Edit user API:", error);
  }
};

// export const deleteUser = async (id) => {
//   try {
//     return await axios.delete(`${URL}/${id}`);
//   } catch (error) {
//     console.log("error while deleting the user API call: ", error);
//   }
// };

export const deleteUser = async (id) => {
  return await axios.delete(`${URL}/${id}`);
};

