import React, { useEffect, useState } from 'react';
import { AiFillWindows, AiOutlineWifi } from 'react-icons/ai';
import { RiMessageFill } from 'react-icons/ri';
import { CiBatteryFull } from 'react-icons/ci';
import { GiSpeaker } from 'react-icons/gi';
import './Taskbar.scss';

const getDateTime = () => {
  const dtNow = new Date();

  // time
  const hrs24 = dtNow.getHours();
  const mins = dtNow.getMinutes();
  const amp = hrs24 > 11 ? 'pm' : 'am';
  let hrs = hrs24;

  if (hrs24 > 12) {
    hrs = hrs - 12;
  }

  // date
  let month = dtNow.getMonth() + 1;
  let day = dtNow.getDate();
  const year = dtNow.getFullYear();

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return { _time: `${hrs}:${mins} ${amp}`, _date: `${day}/${month}/${year}` };
};

const Taskbar = ({}) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  setInterval(() => {
    const { _time, _date } = getDateTime();

    setTime(_time);
    setDate(_date);
  }, 10000);

  useEffect(() => {
    const { _time, _date } = getDateTime();

    setTime(_time);
    setDate(_date);
  }, []);

  return (
    <div className="Taskbar">
      <div className="task-left">
        <div className="windows">
          <AiFillWindows size={23} />
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
          <div>{time}</div>
          <div>{date}</div>
        </div>
        <div className="tooltip">
          <RiMessageFill size={22} />
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
