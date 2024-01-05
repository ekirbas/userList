import ListContainer from "./ListContainer";
import TopBar from "./TopBar";

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
