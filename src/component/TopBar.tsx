//import { ReactComponent as Search1 } from "../assets/react.svg";
/* import search from "../assets/search.svg"; */
import userDetailListIcon from "../assets/userDetailListIcon.svg";
import userAvatarListIcon from "../assets/userAvatarListIcon.svg";
import backIcon from "../assets/backIcon.svg";
import useUserListState, { useListStyle } from "../store/store";

const TopBar = () => {
  const { setListStyle } = useListStyle();
  const { setFilteredUserList } = useUserListState();

  const _detailIcon = () => {
    setListStyle("detail");
    setFilteredUserList(undefined);
  };
  const _avatarIcon = () => {
    setListStyle("avatar");
    setFilteredUserList(undefined);
  };
  const _backIcon = () => {
    setListStyle("avatar");
    setFilteredUserList(undefined);
  };
  return (
    <div className="topBarContainer">
      {/*back button*/}
      <img
        className="topBarBackIcon topBarIcons"
        src={backIcon}
        onClick={_backIcon}
      />
      <input className="searchInput" placeholder="Search"></input>
      {/*  <img src={search} /> */}
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
