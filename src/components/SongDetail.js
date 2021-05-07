import React from 'react';
import {connect} from 'react-redux';

export const SongDetail = (props) => {
  // console.log('props:: '+JSON.stringify(props));
  // console.log('selectedSong:: '+ JSON.stringify(props.selectedSong));
  if (!props.selectedSong) {
    return <div>Please select a song</div>;
  } else {
    return (
      <div>
        <div>Song Name: {props.selectedSong.title}</div>
        <div>Song Duration: {props.selectedSong.duration}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
    console.log('state:: '+ JSON.stringify(state))
    return { selectedSong: state.selectSong };
};

export default connect(mapStateToProps)(SongDetail);