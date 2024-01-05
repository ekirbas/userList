import { create } from "zustand";

interface UserListState {
  users: any;
  setUsers: any;
  filteredUserList: any;
  setFilteredUserList: any;
}

const useUserListState = create<UserListState>()((set) => ({
  users: [],
  filteredUserList: undefined,
  setUsers: (users: any) => set({ users: users }),
  setFilteredUserList: (filteredUsers: any) =>
    set({ filteredUserList: filteredUsers }),
}));

interface ListStyle {
  listStyle: String;
  setListStyle: (v: string) => void;
}

export const useListStyle = create<ListStyle>()((set) => ({
  listStyle: "avatar",
  setListStyle: (v) => set({ listStyle: v }),
}));

export default useUserListState;
