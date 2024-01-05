import { useEffect } from "react";
import UserListContainer from "./component/UserListContainer";
import axios from "axios";
import useUserListState from "./store/store";

const UserList = () => {
  const { setUsers } = useUserListState();
  const fecth = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=20");
      //console.log("respon =", response.data.results);
      //console.log("respon jsn =", JSON.stringify(response.data.results));
      setUsers(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fecth();
  }, []);

  return (
    <div className="userList">
      <UserListContainer />
    </div>
  );
};

export default UserList;
