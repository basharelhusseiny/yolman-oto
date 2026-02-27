import { DictProps } from "@/types/constants";

const Header = ({ dict }: DictProps) => {
  return <header>{dict.header.title}</header>;
};

export default Header;
