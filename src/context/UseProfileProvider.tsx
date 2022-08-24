import { useState, createContext, useEffect, ReactNode } from 'react';
import { useAxios } from '../services/useAxios.jsx';

interface ProfileContextInterface {
  login: boolean;
  showMenu: boolean;
  proyectos: [];
  setBar: () => void;
}

export const ProfileContext = createContext({
  login: false,
  showMenu: false,
  proyectos: [],
  setBar: () => {
    // do nothing
  },
} as ProfileContextInterface);

const token = 'o6xsHB5Czit7vUdggPHJi19b';

const UseProfileProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [proyectos, setProyectos] = useState([] as any);
  const { fetchData, loading, error } = useAxios();

  const setBar = (): void => {
    setShowMenu(!showMenu);
  };

  const getProyectos = async (): Promise<void> => {
    const res = await fetchData({
      method: 'GET',
      url: 'https://api.vercel.com/v9/projects',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {},
    });
    console.log(res?.data);
    //typeScript
    setProyectos(res?.data.projects);
  };

  useEffect(() => {
    getProyectos();
  }, []);

  return (
    <ProfileContext.Provider value={{ login, proyectos, showMenu, setBar }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default UseProfileProvider;
