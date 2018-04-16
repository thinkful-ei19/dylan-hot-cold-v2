import React from 'react';
import { connect } from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export function Header(props) {

  let headerShowing = <TopNav />;

  if (props.infoModal) headerShowing = <InfoModal />;

  return (
    <header>
      {headerShowing}
      <h1>HOT or COLD</h1>
    </header>
  );
}

export const mapStateToProps = state => {
  return {
    infoModal: state.infoModal
  };
};

export default connect(mapStateToProps)(Header);
