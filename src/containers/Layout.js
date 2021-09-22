import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleSideBar } from '../state/NewsData';
import ReactSwipeEvents from '../components/ReactSwipeEvents';
import Navigation from '../components/Navigation';
import Articles from '../components/Articles';
import SideBar from '../components/SideBar';

import './Layout.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.setSideBarWrapperRef = this.setSideBarWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleSwipedRight(event, originalX, endX) {
    const deltaX = Math.abs(originalX - endX);
    if (deltaX > 75) {
      this.props.dispatch(toggleSideBar(endX > originalX));
    }
  }

  handleClickOutside(event) {
    const sideBarExpanded = this.props.NewsData.get('sideBarExpanded');
    if (
      sideBarExpanded &&
      this.SideBarWrapperRef &&
      !this.SideBarWrapperRef.contains(event.target)
    ) {
      this.props.dispatch(toggleSideBar(false));
    }
  }

  setSideBarWrapperRef(node) {
    this.SideBarWrapperRef = node;
  }

  render() {
    return (
      <ReactSwipeEvents
        onSwipedRight={this.handleSwipedRight.bind(this)}
        onSwipedLeft={this.handleSwipedRight.bind(this)}
      >
        <div className="main-container">
          <Navigation />
          <div onMouseDown={this.handleClickOutside}>
            <Articles />
            <div ref={this.setSideBarWrapperRef}>
              <SideBar />
            </div>
          </div>
        </div>
      </ReactSwipeEvents>
    );
  }
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  NewsData: PropTypes.object,
};

export default connect(state => state)(Layout);
