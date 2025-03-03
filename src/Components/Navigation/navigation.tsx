import { PageList, PageLink, ActiveLink } from "./navigation.styled";

export const Navigation = ({ pathname }: {pathname: string}) => {
  return (
    <PageList>
      <li>
        {pathname === "/news" ? (
          <ActiveLink to="/news">News</ActiveLink>
        ) : (
          <PageLink to="/news">News</PageLink>
        )}
      </li>
      <li>
        {pathname.includes("/notices") ? (
          <ActiveLink to="/notices/sell">Find pet</ActiveLink>
        ) : (
          <PageLink to="/notices/sell">Find pet</PageLink>
        )}
      </li>
      <li>
        {pathname === "/friends" ? (
          <ActiveLink to="/friends">Our friends</ActiveLink>
        ) : (
          <PageLink to="/friends">Our friends</PageLink>
        )}
      </li>
    </PageList>
  );
};
