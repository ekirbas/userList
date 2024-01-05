import ListContainer from "./ListContainer";
import TopBar from "./TopBar";

/* import { ReactComponent as Search } from "../assets/search.svg"; */

const UserListContainer = () => {
  return (
    <>
      <div className="space1" />
      <div className="userListContainer">
        <TopBar />
        <ListContainer />
      </div>
      <div className="space1" />
    </>
  );
};

export default UserListContainer;
