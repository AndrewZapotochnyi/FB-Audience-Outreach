import React from 'react';
import avatar from '../img/avatar.png';

export default function Profile() {
  return (
    <div className="Profile-page">
      <img className="Profile-image" src={avatar} alt="avatar" />
      <h1 className="Profile-header">Geralt of Rivia</h1>
      <span className="Profile-username">@geraltofrivia</span>
    </div>
  )
}