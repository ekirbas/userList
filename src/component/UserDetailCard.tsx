import "../styles/UserDetailCard.css";
import useUserListState, { useListStyle } from "../store/store";
import { userDetailCardType } from "../typescript/TypeScripts";

const UserDetailCard = (props: userDetailCardType) => {
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
  const { users, setFilteredUserList } = useUserListState();
  const { setListStyle } = useListStyle();

  const _userDetail = (id: string) => {
    const filteredUserList = users.filter((v: { cell: string }) =>
      v.cell === id ? true : false
    );
    setFilteredUserList(filteredUserList);
    setListStyle("detail");
  };

  return (
    <div className="userDetailCardContainer" onClick={() => _userDetail(id)}>
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
