import React, { useEffect, useState } from 'react';
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
  VscGithubAlt,
} from 'react-icons/vsc';
import { AiOutlineCodepen, AiOutlineLinkedin } from 'react-icons/ai';
import { IoLogoNpm } from 'react-icons/io';
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
    title: 'Creative Developer',
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

const contacts = [
  {
    Component: AiOutlineLinkedin,
    size: 26,
    link: 'https://www.linkedin.com/in/john-erick-madduma-300083113/',
  },
  {
    Component: VscGithubAlt,
    size: 20,
    strokeWidth: 0.6,
    link: 'https://github.com/maddumajohnerick',
  },
  {
    Component: AiOutlineCodepen,
    size: 24,
    link: 'https://codepen.io/maddumajohnerick',
  },
  {
    Component: IoLogoNpm,
    size: 32,
    link: 'https://www.npmjs.com/~maddumajohnerick',
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

const checkMobile = () => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const Contents = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState(1);
  const isMobile = checkMobile();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileClose = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    handleMobileClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              handleMobileClose();
            }}
          >
            <VscAccount size={10} color="#519aba" style={{ marginRight: 8 }} />
            About Me
          </div>
          <div
            className={`file ${selected === 2 ? 'active' : ''}`}
            onClick={() => {
              setSelected(2);
              handleMobileClose();
            }}
          >
            <VscCode size={12} color="#cbbe33" style={{ marginRight: 6 }} />
            tech_and_etc.js
          </div>
        </div>
      )}

      <div className={`content ${isOpen && selected === 2 ? 'side-open' : ''}`}>
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
                <div className="contacts">
                  {contacts.map((contact, i) => (
                    <a
                      key={i}
                      href={contact.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <contact.Component
                        size={contact.size}
                        strokeWidth={contact.strokeWidth || 'initial'}
                      />
                    </a>
                  ))}
                </div>
                <div className="about-text">
                  <h2>About Me</h2>
                  I'm a frontend developer with experience in developing
                  projects using JS, Node, and React. I like cats 🐱
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
