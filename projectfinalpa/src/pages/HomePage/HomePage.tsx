import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Box, Text, Button, Grid, Image, Spinner } from "@chakra-ui/react";
import axios from "axios";
import createTeam from "../../processos/createTeam";
import TeamProps from "../../interface/Team";
import Graph from "../../processos/Graph";
import knapsack from "../../processos/Knapsack";
import Logo from "../../assets/logoPokemon.png";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataTeam, setDataTeam] = useState<TeamProps[]>([]);

  useEffect(() => {
    const data = createTeam();
    setDataTeam(data);
  }, []);

  const setTeam = async (e: BaseSyntheticEvent, mode: string) => {
    e.preventDefault();
    setIsLoading(true);

    const graph = new Graph();

    dataTeam.forEach((_, index) => graph.addNode(index));

    dataTeam.forEach((person, index) => {
      person.wons.forEach((battle) => {
        graph.addEdge(index, battle);
      });
    });

    const bestTeam: Array<TeamProps> = [];

    const random = Math.floor(Math.random() * 99);

    graph.BFS(random, (currentValue: number) => {
      if (dataTeam[currentValue].power > 7) {
        bestTeam.push(dataTeam[currentValue]);
        return false;
      } else {
        return false;
      }
    });

    setDataTeam(bestTeam);

    const teamDataPoke: Array<any> = await Promise.all(
      bestTeam.map(async (dataPoke) => {
        const pokemonData: Array<any> = await Promise.all(
          dataPoke.pokemons.map(async (pokemon) => {
            try {
              const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon}`
              );
              return response.data;
            } catch (error) {
              console.error(error);
            }
          })
        );
        dataPoke.pokemons = pokemonData;
        return dataPoke;
      })
    );
    let theBestOne: any = {};
    let theBestValue: number = 0;
    teamDataPoke.forEach((dataPoke) => {
      const knapsackValue = knapsack(dataPoke.pokemons, 500, mode);
      if (theBestValue < knapsackValue.maxValue) {
        theBestValue = knapsackValue.maxValue;
        theBestOne = dataPoke;
      }
    });
    setIsLoading(false);

    navigate("/temeGerado", { state: theBestOne });
  };

  return (
    <>
      <Box position="fixed" right="0" left="0" top="10%" alignItems="center">
        <Text
          fontWeight="extrabold"
          fontSize="2rem"
          textAlign="center"
          display="flex"
          alignItems="center"
          alignContent="center"
          justifyContent="center"
        >
          {" "}
          Gerador de equipe <Image marginLeft="1rem" src={Logo} />
        </Text>
        <Text
          fontWeight="extrabold"
          fontSize="2rem"
          display="flex"
          alignItems="center"
          alignContent="center"
          justifyContent="center"
        >
          {" "}
          Selecione o atribito foco para que assim seja gerado uma equipe.
        </Text>
      </Box>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-evenly"
        borderBottom="1px solid black"
        pos="fixed"
        top="0"
      >
        <Box
          backgroundColor="white"
          borderRadius="1rem"
          padding="4rem"
          paddingLeft="6rem"
        >
          <Grid
            width="600px"
            templateColumns="repeat(3, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap="1rem"
          >
            <Button
              bg="#48D0B0"
              _hover={{ background: "#62da6e" }}
              onClick={(e) => setTeam(e, "hp")}
            >
              Saúde
            </Button>
            <Button
              bg="#FB6C6C"
              _hover={{ background: "#cf5f5f" }}
              onClick={(e) => setTeam(e, "attack")}
            >
              Ataque
            </Button>
            <Button
              bg="#6fd7f7"
              _hover={{ background: "#5cb4cf" }}
              onClick={(e) => setTeam(e, "defense")}
            >
              Defesa
            </Button>
            <Button
              bg="#f7ba6f"
              _hover={{ background: "#ce9c5e" }}
              onClick={(e) => setTeam(e, "special-attack")}
            >
              Ataque Especial
            </Button>
            <Button
              bg="#9E4399"
              _hover={{ background: "#a45fd1" }}
              onClick={(e) => setTeam(e, "special-defense")}
            >
              Defesa Especial
            </Button>
            <Button
              bg="#FFCE4B"
              _hover={{ background: "#D6AE3E" }}
              onClick={(e) => setTeam(e, "speed")}
            >
              Velocidade
            </Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
