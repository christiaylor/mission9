import "./App.css";
import data from "../src/CollegeBasketballTeams.json"; // Bring in the data

// Each team in the data has these properties
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// Description of page
function HeadingSection() {
  return <h1>March Madness Information</h1>;
}

// Each individual team. This will be the html replicated for the whole list.
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

// Put the teams together
function TeamList() {
  const teams = data.teams || [];
  return (
    <>
      {teams.map((singleTeam) => {
        return <Team {...singleTeam} />; // singleTeam doesn't actually need to be defined since it's assumed to be one of the list.
      })}
    </>
  );
}

// Main function. Display everything.
function App() {
  return (
    <>
      <HeadingSection />
      <TeamList />
    </>
  );
}

export default App;
