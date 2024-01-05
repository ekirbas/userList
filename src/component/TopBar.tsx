import userDetailListIcon from "../assets/userDetailListIcon.svg";
import userAvatarListIcon from "../assets/userAvatarListIcon.svg";
import backIcon from "../assets/backIcon.svg";
import useUserListState, { useListStyle } from "../store/store";

const TopBar = () => {
  const { setListStyle } = useListStyle();
  const { users, setFilteredUserList, searchText, setSearchText } =
    useUserListState();

  const _detailIcon = () => {
    setListStyle("detail");
    setFilteredUserList();
  };
  const _avatarIcon = () => {
    setListStyle("avatar");
    setFilteredUserList();
  };
  const _backIcon = () => {
    setListStyle("avatar");
    setFilteredUserList();
  };
  const _search = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchtxt = e.target.value;
    setSearchText(searchtxt);

    if (searchtxt !== "") {
      const searchUserList = users?.filter(
        (v: { name: { first: string; last: string } }) => {
          let fullName: string =
            v.name.first.toLocaleLowerCase() +
            " " +
            v.name.last.toLocaleLowerCase();
          return fullName.includes(searchtxt.toLocaleLowerCase());
        }
      );
      setFilteredUserList(searchUserList);
    } else {
      setFilteredUserList();
    }
  };
  return (
    <div className="topBarContainer">
      {/*back button*/}
      <img
        className="topBarBackIcon topBarIcons"
        src={backIcon}
        onClick={_backIcon}
      />
      {/*  <img src={search} /> */}
      <input
        className="searchInput"
        placeholder="Search"
        value={searchText}
        onChange={(e) => _search(e)}
      ></input>
      {/* toggle button */}
      <div className="listStyleIcons">
        <img
          className="topBarIcons"
          src={userDetailListIcon}
          onClick={_detailIcon}
        />
        <img
          className="topBarIcons"
          src={userAvatarListIcon}
          onClick={_avatarIcon}
        />
      </div>
    </div>
  );
};

export default TopBar;
