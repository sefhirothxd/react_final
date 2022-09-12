import { useContext } from 'react';
import { ProfileContext } from '../context/UseProfileProvider';

type Project = {
  name: string;
  targets: {
    production: {
      alias: [] | string;
      meta: {
        githubCommitMessage: string;
      };
    };
  };
  link: {
    repo: string;
  };
  updatedAt: string;
};

const Proyect = () => {
  const { proyectos } = useContext(ProfileContext);

  return (
    <div className="w-full">
      <h1 className="text-3xl my-8">My Proyects</h1>
      <div className="flex justify-center gap-10 items-center flex-wrap altoProyecto overflow-y-auto pb-5">
        {proyectos.length > 0 ? (
          proyectos?.map((project: Project) => (
            <div
              key={project.name}
              className="w-96  rounded-lg border-2 text-gray-200 shadow-md bg-gray-800 border-gray-700"
            >
              <div className="p-5">
                <a
                  href={'https://' + project.targets.production.alias[0]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                    {project.name}
                  </h5>
                </a>
                <div className="mb-3 font-normaltext-gray-400">
                  <div>
                    <p className="text-gray-400">{'updated'.toUpperCase()}</p>
                    <span>{new Date(project.updatedAt).toDateString()}</span>
                  </div>
                  <div>
                    <p className="text-gray-400">{'Commit'.toUpperCase()}</p>
                    <span>
                      {project.targets.production.meta.githubCommitMessage}
                    </span>
                  </div>
                </div>
                <a
                  href={'https://github.com/sefhirothxd/' + project?.link?.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mr-3 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  GitHub
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={'https://' + project.targets.production.alias[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Vercel
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loding...</p>
        )}
      </div>
    </div>
  );
};

export default Proyect;
