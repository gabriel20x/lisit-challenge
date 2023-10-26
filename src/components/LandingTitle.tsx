import {useLocation} from "react-router-dom";

export const LandingTitle = () => {
  const {pathname} = useLocation()

  const isInitialPage = pathname === '/'

  return (
    <div className={`transition-all duration-500 flex items-center justify-around gap-10`}>
      <div className={'border-b-2 border-t-2 border-white'}>
        <h1 className={`${isInitialPage ? 'landing-title py-4' : 'mini-landing-title py-2'} w-max transition-all duration-500`}>Star Wars</h1>
      </div>
    </div>
  );
};

export default LandingTitle