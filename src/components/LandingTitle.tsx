import {Link, useLocation} from "react-router-dom";

export const LandingTitle = () => {
  const {pathname} = useLocation()

  const isInitialPage = pathname === '/'

  return (
    <Link to={'/'} className={`transition-all duration-500 flex items-center justify-around gap-10 cursor-pointer`}>
      <div className={'border-b-2 border-t-2 border-white'}>
        <span className={`${isInitialPage ? 'landing-title py-4' : 'mini-landing-title py-2'} flex w-max transition-all duration-500`}>Star Wars</span>
      </div>
    </Link>
  );
};

export default LandingTitle