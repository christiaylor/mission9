// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import data from "../src/CollegeBasketballTeams.json";

// Assuming each team in the data has these properties
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function HeadingSection() {
  return <h1>March Madness Information</h1>;
}

function Team({ school, name, city, state }: TeamProps) {
  return (
    <>
      <br />
      <h4>School Name: {school}</h4>
      <h4>Mascot: {name}</h4>
      <h4>Location: {city + ", " + state}</h4>
    </>
  );
}

function TeamList() {
  const teams = data.teams || [];

  return (
    <>
      {teams.map((singleTeam) => {
        return <Team {...singleTeam} />;
      })}
    </>
  );
}

function App() {
  return (
    <>
      <HeadingSection />
      <TeamList />
    </>
  );
}

export default App;
