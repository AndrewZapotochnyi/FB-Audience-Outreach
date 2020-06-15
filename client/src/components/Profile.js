import React from 'react';
import avatar from '../img/avatar.png';
import SearchNotice from "./SearchNotice";

export default function Profile(props) {
  return (
    <div className="Profile-page">
      <img className="Profile-image" src={avatar} alt="avatar" />
      <h1 className="Profile-header">Geralt of Rivia</h1>
      <span className="Profile-username">@geraltofrivia</span>
      {!props.saveObject.reachEstimates && <SearchNotice />}
    </div>
  )
}