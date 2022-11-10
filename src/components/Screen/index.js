import React, { useState } from 'react';
import {
  VscSourceControl,
  VscBellDot,
  VscFeedback,
  VscSync,
  VscWarning,
  VscError,
  VscClose,
  VscChromeRestore,
  VscChromeMinimize,
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
} from 'react-icons/vsc';
import './Screen.scss';

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

const Screen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Screen" style={{ backgroundImage: `url('/galaxy.jpg')` }}>
      <div className="vscode">
        <div className="menubar">
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

        <div className="contents">
          <div className="leftmost">
            <div
              className={`toggle ${isOpen ? 'open' : ''}`}
              onClick={handleToggle}
            >
              <VscFiles size={25} />
            </div>
            <div>
              <VscSearch size={25} />
            </div>
            <div>
              <VscSourceControl size={25} />
              <div className="changes">14</div>
            </div>
            <div>
              <VscDebugAlt size={25} />
            </div>
            <div>
              <VscExtensions size={25} />
            </div>
          </div>
          {isOpen && <div className="files">b</div>}
          <div className="content">c</div>
        </div>

        <div className="botbar">
          <div className="left">
            <VscSourceControl size={16} />
            <div className="mr-16">master</div>
            <VscSync size={16} />
            <div>3&darr;</div>
            <div className="mr-16">20&uarr;</div>
            <VscError size={16} />
            <div>0</div>
            <VscWarning size={16} />
            <div>0</div>
          </div>
          <div className="right">
            <VscFeedback size={16} />
            <VscBellDot size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
