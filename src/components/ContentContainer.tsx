import React, {PropsWithChildren} from 'react';

type ContentContainerProps = {

}

export const ContentContainer = (props:PropsWithChildren<ContentContainerProps>) => {
  const {children} = props
  return (
    <div className={'flex flex-col h-screen p-4 pt-20 w-full'}>
      {children}
    </div>
  );
};

export default ContentContainer