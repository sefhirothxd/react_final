import React from 'react';
import IconReact from '../assets/react.svg';
import { Icon } from '@iconify/react';

const Skill = () => {
  return (
    <div className=" w-full pt-5 px-5 flex justify-start gap-y-14 items-center flex-col ">
      <h1 className="text-3xl text-center mb-3">What i do ✔</h1>
      <div className="grid-mod">
        <div className="p-6 w-40  rounded-lg border shadow-md bg-gray-800  border-gray-200">
          <div className="mt-3 flex w-full justify-center items-center">
            <Icon icon="logos:html-5" className=" text-5xl" />
          </div>
          <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-white">
            Html 5
          </h5>
        </div>
        <div className="p-6 w-40  rounded-lg border shadow-md bg-gray-800 border-gray-200">
          <div className="mt-3 flex w-full justify-center items-center">
            <Icon icon="vscode-icons:file-type-css" className="text-5xl" />
          </div>
          <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-white">
            Css
          </h5>
        </div>
        <div className="p-6 w-40  rounded-lg border shadow-md bg-gray-800 border-gray-200">
          <div className="mt-3 flex w-full justify-center items-center">
            <Icon
              icon="vscode-icons:file-type-js-official"
              className="text-5xl"
            />
          </div>
          <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-white">
            JavaScript
          </h5>
        </div>
        <div className="p-6 w-40  rounded-lg border shadow-md bg-gray-800 border-gray-200">
          <div className="mt-3 flex w-full justify-center items-center">
            <Icon icon="logos:windi-css" className="text-5xl" />
          </div>
          <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-white">
            Tailwinds
          </h5>
        </div>
        <div className="p-6 w-40  rounded-lg border shadow-md bg-gray-800 border-gray-200">
          <div className="mt-3 flex w-full justify-center items-center">
            <Icon icon="vscode-icons:file-type-reactjs" className="text-5xl" />
          </div>
          <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-white">
            React
          </h5>
        </div>
        <div className="p-6 w-40  rounded-lg border shadow-md bg-gray-800 border-gray-200">
          <div className="mt-3 flex w-full justify-center items-center">
            <Icon icon="fa-brands:node" className="text-green-500 text-5xl" />
          </div>
          <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-white">
            Node js
          </h5>
        </div>
        <div className="p-6 w-40  rounded-lg border shadow-md bg-gray-800 border-gray-200">
          <div className="mt-3 flex w-full justify-center items-center">
            <Icon icon="simple-icons:express" className="text-5xl" />
          </div>
          <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-white">
            Express js
          </h5>
        </div>
        <div className="p-6 w-40  rounded-lg border shadow-md bg-gray-800 border-gray-200">
          <div className="mt-3 flex w-full justify-center items-center">
            <Icon icon="vscode-icons:file-type-jest" className="text-5xl" />
          </div>
          <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-white">
            Jest
          </h5>
        </div>
        <div className="p-6 w-40  rounded-lg border shadow-md bg-gray-800 border-gray-200">
          <div className="mt-3 flex w-full justify-center items-center">
            <Icon
              icon="clarity:ci-cd-line"
              className="text-emerald-300 text-5xl"
            />
          </div>
          <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-white">
            CI/CD
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Skill;
