import Terminal from '../assets/terminals.svg';
import Detail from '../assets/detail.svg';
import Proyect from './Proyect';

const Main = () => {
  return (
    <div className="pt-5 px-5 w-full">
      <div className="mb-8 relative">
        <h1 className="text-3xl text-center mb-3">
          Hi 👋, I&lsquo;m Bryan Omar Vera Cachay
        </h1>
        <p className="text-xl text-center">Full Stack Develeper</p>
      </div>
      <div className="py-5 px-5 bg-slate-600 md:max-w-7xl max-w-5xl mx-auto rounded-p48 flex items-center flex-col md:flex-row justify-evenly md:gap-11 gap-2">
        <div>
          <div className=" w-40 h-40 rounded-full bg-slate-400 overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/61520167?v=4"
              alt="mi foto"
            />
          </div>
        </div>
        <div className="flex items-center flex-col gap-2 w-full ">
          <h2 className="text-2xl text-center">About me</h2>
          <p className="text-justify leading-5 w-4/5	">
            Desarrollador FullStack con capacidades de resolver problemas y en
            búsqueda de retos para contribuir con el desarrollo de la empresa y
            el crecimiento profesional. Me encuentro en constante capacitación
            para mantenerme al día con el avance tecnológico para implementarlos
            en futuros proyectos.
          </p>
        </div>
        <div className=" hidden xl:block">
          <div className="p-8 rounded-p48 w-56">
            <h3 className="mb-8">Resumen</h3>
            <ul className=" flex flex-col gap-6">
              <li className="flex items-center gap-12">
                <div className="flex items-center  gap-3">
                  <img src={Terminal} alt="Terminal" />
                  <p>320</p>
                </div>
                <h4>Proyectos</h4>
              </li>
              <li className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <img src={Detail} alt="Detail" />
                  <p>320</p>
                </div>
                <h4>Proyectos</h4>
              </li>
              <li className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <img src={Detail} alt="Detail" />
                  <p>320</p>
                </div>
                <h4>Proyectos</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Proyect />
    </div>
  );
};

export default Main;
