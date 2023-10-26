import React, {PropsWithChildren} from 'react';
import {useLocation} from "react-router-dom";

type HeaderProps = {
}

const HeaderContainer = (props: PropsWithChildren<HeaderProps>) => {
  const {children } = props
  const {pathname} = useLocation()

  const isInitialPage = pathname === '/'
  return (
    <header className={`${isInitialPage ? 'top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 flex-col max-w-[50vw]' : 'top-4 left-4 flex-row max-w-fit '} transition-all duration-500 absolute gap-4 w-full flex items-center`}>
      {children}
    </header>
  );
};

export default HeaderContainer;