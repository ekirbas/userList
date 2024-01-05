import React from "react";
import useUserListState, { useListStyle } from "../store/store";

type userCardType = {
  fullName: string;
  userAvatar: string;
  id: string;
};
const UserCard = (props: userCardType) => {
  const { fullName, userAvatar, id } = props;
  const { users, setFilteredUserList } = useUserListState();
  const { setListStyle } = useListStyle();

  const _userDetail = (id: string) => {
    const filteredUserList = users.filter((v: any) =>
      v.cell === id ? true : false
    );
    setFilteredUserList(filteredUserList);
    setListStyle("detail");
  };
  return (
    <div className="userCardContainer" onClick={() => _userDetail(id)}>
      <img className="userImage" src={userAvatar} />
      <div className="useFullName">{fullName}</div>
    </div>
  );
};

export default UserCard;
