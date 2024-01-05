import React from "react";
import "../styles/UserDetailCard.css";
import useUserListState, { useListStyle } from "../store/store";

type userCardType = {
  fullName: string;
  country: string;
  city: string;
  phone: string;
  eMail: string;
  date: string;
  age: number;
  userName: string;
  userAvatar: string;
  id: string;
};
const UserDetailCard = (props: userCardType) => {
  const {
    fullName,
    country,
    city,
    phone,
    eMail,
    date,
    age,
    userName,
    userAvatar,
    id,
  } = props;
  const { users, setFilteredUserList, filteredUserList } = useUserListState();
  const { setListStyle } = useListStyle();

  const _userDetail = (id: string) => {
    const filteredUserList = users.filter((v: any) =>
      v.cell === id ? true : false
    );
    setFilteredUserList(filteredUserList);
    setListStyle("detail");
  };

  return (
    <div
      className="userDetailCardContainer"
      onClick={() => `${filteredUserList === undefined ? _userDetail(id) : ""}`}
    >
      <img className="userDetailImage" src={userAvatar} />
      <div className="userDetailTableContainer">
        <table className="userDetailTable">
          <tbody>
            <tr>
              <th colSpan={4} className="tableFullName">
                {fullName}
              </th>
            </tr>
            <tr>
              <th>Country</th>
              <td>{country}</td>
              <th>Date</th>
              <td>
                {`${date.substring(8, 10)}.${date.substring(5, 7)}
                .${date.substring(0, 4)}`}
              </td>
            </tr>
            <tr>
              <th>City</th>
              <td>{city}</td>
              <th>Age</th>
              <td>{age}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{phone}</td>
              <th>User Name</th>
              <td>{userName}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td colSpan={3}>{eMail}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetailCard;
