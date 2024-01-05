import { create } from "zustand";
import { ListStyle, UserListState } from "../typescript/TypeScripts";

const useUserListState = create<UserListState>()((set) => ({
  users: [],
  filteredUserList: null,
  searchText: "",
  setUsers: (users: any) => set({ users: users }),
  setFilteredUserList: (filteredUsers: any) =>
    set({ filteredUserList: filteredUsers }),
  setSearchText: (searchText) => set({ searchText: searchText }),
}));

export const useListStyle = create<ListStyle>()((set) => ({
  listStyle: "avatar",
  setListStyle: (v) => set({ listStyle: v }),
}));

export default useUserListState;
