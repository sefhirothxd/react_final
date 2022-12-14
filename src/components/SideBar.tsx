import Dashboard from '../assets/dashboard.svg';
import DashboardW from '../assets/dasbord-white.svg';
import Skill from '../assets/skill.svg';
import Refe from '../assets/refe.svg';
import Twitter from '../assets/twitter.svg';
import GitHub from '../assets/github.svg';
import Linkedin from '../assets/link.svg';
import { NavLink, useLocation } from 'react-router-dom';

const SideBar = () => {
  const params = useLocation();
  return (
    <div className="border-r max-w-xs probando w-full hidden lg:block border-white  bg-slate-700 z-10 min-h-screen py-11 relative">
      <div className="flex items-center justify-center gap-4 mb-24">
        <h1 className="text-3xl font-medium">LarnU</h1>
        <p className="text-xl italic text-blueTitle">BootCamp</p>
      </div>
      <div className=" ">
        <ul className="flex items-center justify-center  gap-11 flex-col">
          <li className="mx-auto w-40">
            <NavLink to={'/'} className="flex gap-4 ">
              <img
                src={params.pathname === '/' ? Dashboard : DashboardW}
                alt="icon dashboard"
              />
              <p className="text-xl ">Dashboard</p>
            </NavLink>
          </li>
          <li className="mx-auto w-40">
            <NavLink to={'/skill'} className="flex gap-4">
              <img src={Skill} alt="icon dashboard" />
              <p className="text-xl ">My Skills</p>
            </NavLink>
          </li>
          <li className="mx-auto w-40">
            <NavLink to={'/reference'} className="flex gap-4">
              <img src={Refe} alt="icon dashboard" />
              <p className="text-xl ">References</p>
            </NavLink>
          </li>
        </ul>
        <div className="absolute bottom-10 leftSocial text-center">
          <h3 className="mb-5">Follow us:</h3>
          <div className="flex justify-between gap-10 items-center">
            <a
              href="https://twitter.com/bveracachay"
              target={'_blank'}
              rel="noreferrer"
            >
              <img className="w-5" src={Twitter} alt="twitter icon" />
            </a>
            <a
              href="https://github.com/sefhirothxd"
              target={'_blank'}
              rel="noreferrer"
            >
              <img src={GitHub} alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/bryanvera/"
              target={'_blank'}
              rel="noreferrer"
            >
              <img src={Linkedin} alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
