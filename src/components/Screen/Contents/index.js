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
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Contents.scss';

const exps = [
  {
    company: 'Arcanys',
    title: 'Web Developer',
    span: 'July 2018 - Present',
  },
  {
    company: 'Sizmek',
    title: 'Web Developer',
    span: 'Sep 2017 - Jul 2018',
  },
  {
    company: 'Appshouse',
    title: 'Frontend Developer',
    span: 'April 2016 - Sep 2017',
  },
  {
    company: 'Azaza',
    title: 'Backend Developer',
    span: 'May 2015 - Feb 2016',
  },
];

const codeString = `const technologies = [
  'Node',
  'React', 
  'Javascript',
  'Typescript', // WIP
  'NextJs', // WIP
  'CSS',
  'SASS', // WIP
  'HTML', 
  'Git', 
]

const educ = {
  university: 'CIT-U(Cebu Institute of Technology - University)',
  course: 'BSIT',
  year: 2015
}

const hobbies = [
  'Playing bass 🎸',
  'Reading manga 📖',
  'Watching movies 📺',
  'Playing with cat 🐈',
  'Sleeping 😴'
  'Eating 🍴'
]`;

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
          {/* <div className="changes">14</div> */}
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
            tech_and_etc.js
          </div>
        </div>
      )}

      <div className={`content ${isOpen ? 'side-open' : ''}`}>
        <div className="file-tabs">
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
            tech_and_etc.js
          </div>
        </div>

        {selected === 1 && (
          <div className="file-output">
            <div className="about">
              <div className="info">
                <h1>John Erick Madduma</h1>
                <div className="title">Frontend Developer</div>
                <div className="about-text">
                  <h2>About Me</h2>
                  I'm a frontend developer with experience developing projects
                  using JS, Node, and React. I like cats 🐱
                  <h2>Work Experience</h2>
                  {exps.map((exp) => (
                    <div className="work">
                      <span>{exp.company}</span> {exp.title}
                      <div>{exp.span}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pic">
                <img src="/me.png" alt="" />
              </div>
            </div>
          </div>
        )}
        {selected === 2 && (
          <div className="file-output code">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              showLineNumbers
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contents;
