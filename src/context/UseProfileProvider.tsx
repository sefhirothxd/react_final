import React, { useState, createContext, useEffect, ReactNode } from 'react';
import { useAxios } from '../services/useAxios.jsx';
import Login from '../pages/Login';
import Proyect from '../components/Proyect';
export const ProfileContext = createContext({
  login: false,
  showMenu: false,
  proyectos: [''],
  setBar: () => {},
});

const token = 'o6xsHB5Czit7vUdggPHJi19b';

interface Profile {
  method: string;
  url: string;
  headers?: {
    Authorization: String;
  };
  data?: Object;
}

const UseProfileProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [proyectos, setProyectos] = useState([] as any);
  const { fetchData, loading, error } = useAxios();

  const setBar = (): void => {
    setShowMenu(!showMenu);
  };

  const getProyectos = async () => {
    const res = await fetchData({
      method: 'GET',
      url: 'https://api.vercel.com/v9/projects',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {},
    });
    console.log(res);
    //typeScript
    setProyectos(res?.data);
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
