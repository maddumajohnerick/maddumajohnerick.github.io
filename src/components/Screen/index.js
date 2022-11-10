import React from 'react';
import {
  VscSourceControl,
  VscBellDot,
  VscFeedback,
  VscSync,
  VscWarning,
  VscError,
} from 'react-icons/vsc';
import './Screen.scss';

const Screen = ({}) => {
  return (
    <div className="Screen" style={{ backgroundImage: `url('/galaxy.jpg')` }}>
      <div className="vscode">
        <div className="menubar"></div>
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
