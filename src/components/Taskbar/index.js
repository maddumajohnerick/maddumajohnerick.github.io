import React from 'react';
import { AiFillWindows } from 'react-icons/ai';
import './Taskbar.scss';

const Taskbar = ({}) => {
  return (
    <div className="Taskbar">
      <div className="task-left">
        <div className="windows">
          <AiFillWindows size={25} />
        </div>
      </div>
      <div className="task-right">
        <img src="/task-icons.png" alt="task-icons" className="task-icons" />
        <div className="lang">ENG</div>
        <div>
          <div>10:30 pm</div>
          <div>10/11/2022</div>
        </div>
        <img src="/tooltip.png" alt="tooltip" className="tooltip" />
      </div>
    </div>
  );
};

export default Taskbar;
