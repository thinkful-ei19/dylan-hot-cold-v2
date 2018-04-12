import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {

  let headerShowing = <TopNav newGame={props.newGame} toggleInfoModal={props.toggleInfoModal} />;

  if (props.infoModal) headerShowing = <InfoModal toggleInfoModal={props.toggleInfoModal} />;

  return (
    <header>
      {headerShowing}
      <h1>HOT or COLD</h1>
    </header>
  );
}
