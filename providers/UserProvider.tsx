"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

type Props = {
  children: React.ReactNode;
};

const UserProvider = (props: Props) => {
  return <MyUserContextProvider>{props.children}</MyUserContextProvider>;
};

export default UserProvider;
