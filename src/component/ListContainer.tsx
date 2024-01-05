import React from "react";
import UserCard from "./UserCard";
import UserDetailCard from "./UserDetailCard";
import useUserListState, { useListStyle } from "../store/store";
import { useState } from "react";

const ListContainer = () => {
  const { users, filteredUserList } = useUserListState();
  const { listStyle } = useListStyle();

  if (listStyle === "avatar") {
    return (
      <div className="listContainer">
        {users?.map((v: any) => {
          return (
            <UserCard
              userAvatar={v.picture.large}
              fullName={`${v.name.first} ${v.name.last}`}
              id={v.cell}
              key={v.cell}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="detailListContainer">
        {(filteredUserList || users)?.map((v: any) => {
          return (
            <UserDetailCard
              userAvatar={v.picture.large}
              fullName={`${v.name.first} ${v.name.last}`}
              age={v.dob.age}
              city={v.location.city}
              country={v.location.country}
              date={v.dob.date.substring(0, 10)}
              eMail={v.email}
              phone={v.phone}
              userName={v.login.username}
              id={v.cell}
              key={v.cell}
            />
          );
        })}
      </div>
    );
  }
};

export default ListContainer;
