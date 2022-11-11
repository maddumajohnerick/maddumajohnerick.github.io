import React from 'react';
import Menubar from './Menubar';
import Contents from './Contents';
import Botbar from './Botbar';
import './Screen.scss';

const Screen = () => {
  return (
    <div className="Screen" style={{ backgroundImage: `url('/galaxy.jpg')` }}>
      <div className="vscode">
        <Menubar />

        <Contents />

        <Botbar />
      </div>
    </div>
  );
};

export default Screen;
