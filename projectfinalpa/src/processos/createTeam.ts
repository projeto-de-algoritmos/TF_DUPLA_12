import TeamProps from "../interface/Team";

const generatePokemons = () => {
  const pokemons: Array<number> = [];
  for (var i = 0; i < 6; i++) {
    pokemons.push(Math.floor(Math.random() * 898) + 1);
  }

  return pokemons;
};

const generateWons = () => {
  const wons: Array<number> = [];
  for (var i = 0; i < 5; i++) {
    wons.push(Math.floor(Math.random() * 99));
  }

  return wons;
};

const createTeam = () => {
  const persons: Array<TeamProps> = [];
  for (var i = 0; i < 100; i++) {
    persons.push({
      pokemons: generatePokemons(),
      wons: generateWons(),
      power: Math.floor(Math.random() * 10) + 1,
    });
  }

  return persons;
};

export default createTeam;
