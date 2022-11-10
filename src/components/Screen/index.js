import React from 'react';
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
} from 'react-icons/vsc';
import './Screen.scss';

const Screen = ({}) => {
  return (
    <div className="Screen" style={{ backgroundImage: `url('/galaxy.jpg')` }}>
      <div className="vscode">
        <div className="menubar">
          <div className="left">
            <img alt="vscode" src="/vscode.png" />
            <div className="button opt1">File</div>
            <div className="button opt2">Edit</div>
            <div className="button opt3">Selection</div>
            <div className="button opt4">View</div>
            <div className="button opt5">Go</div>
            <div className="button opt6">Run</div>
            <div className="button opt7">Terminal</div>
            <div className="button opt8">Help</div>
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

        <div className="contents"></div>

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
