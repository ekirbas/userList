export type Users = Users2[];

export interface Users2 {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: any;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Registered {
  date: string;
  age: number;
}

export interface Id {
  name: string;
  value?: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserListState {
  users: Users;
  filteredUserList: Users;
  searchText: string;
  setUsers: (users: Users) => void;
  setFilteredUserList: (filteredUserList: Users) => void;
  setSearchText: (searchText: string) => void;
}

export interface ListStyle {
  listStyle: String;
  setListStyle: (v: string) => void;
}

export type userDetailCardType = {
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

export type userCardType = {
  fullName: string;
  userAvatar: string;
  id: string;
};
