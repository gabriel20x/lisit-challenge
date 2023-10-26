import React, {PropsWithChildren} from 'react';

type MainContainerProps = {

}

export const MainContainer = (props:PropsWithChildren<MainContainerProps>) => {
  const {children} = props
  return (
    <div className={'overflow-auto sm:overflow-hidden relative transition-all bg-gradient-to-b font-sjRegular from-blue-space from-10% to-dark-space to-50% text-white h-screen max-h-screen flex flex-col items-center justify-center gap-4'}>
      {children}
    </div>
  );
};

export default MainContainer