import React, { useState } from 'react';
import {
  VscSourceControl,
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
} from 'react-icons/vsc';
import './Contents.scss';

const Contents = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Contents">
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
  );
};

export default Contents;
