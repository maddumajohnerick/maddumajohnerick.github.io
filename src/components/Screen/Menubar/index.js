import React from 'react';
import { VscClose, VscChromeRestore, VscChromeMinimize } from 'react-icons/vsc';
import './Menubar.scss';

const menus = [
  'File',
  'Edit',
  'Selection',
  'View',
  'Go',
  'Run',
  'Terminal',
  'Help',
];

const Menubar = () => {
  return (
    <div className="Menubar">
      <div className="left">
        <img alt="vscode" src="/vscode.png" />
        {menus.map((menu, index) => (
          <div className={`button opt${index + 1}`}>{menu}</div>
        ))}
        <div className="button optn">Options</div>
      </div>
      <div className="right">
        <div className="button ">
          <VscChromeMinimize size={22} />
        </div>
        <div className="button ">
          <VscChromeRestore size={22} />
        </div>
        <div className="button close">
          <VscClose size={22} />
        </div>
      </div>
    </div>
  );
};

export default Menubar;
