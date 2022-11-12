import React, { useState } from 'react';
import {
  VscSourceControl,
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
  VscEllipsis,
  VscChevronDown,
  VscAccount,
  VscCode,
} from 'react-icons/vsc';
import './Contents.scss';

const Contents = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState(1);
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
          <VscFiles size={28} />
        </div>
        <div className="buttons btn1">
          <VscSearch size={28} />
        </div>
        <div className="buttons btn2">
          <VscSourceControl size={28} />
          <div className="changes">14</div>
        </div>
        <div className="buttons btn3">
          <VscDebugAlt size={28} />
        </div>
        <div className="buttons btn4">
          <VscExtensions size={28} />
        </div>
      </div>

      {isOpen && (
        <div className="files">
          <div className="explorer">
            EXPLORER
            <div></div>
            <div>
              <VscEllipsis size={20} />
            </div>
          </div>
          <div className="repo">
            <div className="arrow-down">
              <VscChevronDown size={20} />
            </div>
            MADDUMAJOHNERICK.GITHUB.IO
          </div>
          <div
            className={`file ${selected === 1 ? 'active' : ''}`}
            onClick={() => {
              setSelected(1);
            }}
          >
            <VscAccount size={10} color="#519aba" style={{ marginRight: 8 }} />
            About Me
          </div>
          <div
            className={`file ${selected === 2 ? 'active' : ''}`}
            onClick={() => {
              setSelected(2);
            }}
          >
            <VscCode size={12} color="#cbbe33" style={{ marginRight: 6 }} />
            Tech and Exp
          </div>
        </div>
      )}

      <div className="content">
        <div className="file-tabs"></div>

        {selected === 1 && (
          <div className="file-output">
            <div className="about">
              <div className="info">
                <h1>John Erick Madduma</h1>
              </div>
              <div>
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
                test
                <br />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contents;
