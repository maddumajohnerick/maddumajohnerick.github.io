import React from 'react';
import { AiFillWindows, AiOutlineWifi } from 'react-icons/ai';
import { RiMessageFill } from 'react-icons/ri';
import { CiBatteryFull } from 'react-icons/ci';
import { GiSpeaker } from 'react-icons/gi';
import './Taskbar.scss';

const Taskbar = ({}) => {
  return (
    <div className="Taskbar">
      <div className="task-left">
        <div className="windows">
          <AiFillWindows size={25} />
        </div>
        <div className="vscode">
          <img alt="vscode" src="/vscode.png" />
        </div>
      </div>
      <div className="task-right">
        <div className="batt">
          <CiBatteryFull size={21} />
        </div>
        <div className="wifi">
          <AiOutlineWifi size={20} />
        </div>
        <div className="speaker">
          <GiSpeaker size={23} />
        </div>
        <div className="lang">ENG</div>
        <div className="time">
          <div>10:30 pm</div>
          <div>10/11/2022</div>
        </div>
        <div className="tooltip">
          <RiMessageFill size={22} />
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
