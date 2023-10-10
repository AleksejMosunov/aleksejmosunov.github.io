import React from 'react';
import Team from './Team';
import { teamInfo } from './utils';

export default function App() {
  return teamInfo.map((teamData) => <Team teamData={teamData} key={teamData.teamId} />);
}
