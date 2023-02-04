import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Button, Grid, Image, Spinner } from "@chakra-ui/react";
import axios from "axios";
import createTeam from "../../processos/createTeam";
import TeamProps from "../../interface/Team";
import Graph from "../../processos/Graph";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
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
  };

  return (
    <>
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
        <Grid
          width="600px"
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap="1rem"
        >
          <Button
            bg="#48D0B0"
            _hover={{ background: "#62da6e" }}
            onClick={(e) => setTeam(e, "hp")}
          >
            Health Power
          </Button>
          <Button
            bg="#FB6C6C"
            _hover={{ background: "#cf5f5f" }}
            onClick={(e) => setTeam(e, "attack")}
          >
            Attack
          </Button>
          <Button
            bg="#6fd7f7"
            _hover={{ background: "#5cb4cf" }}
            onClick={(e) => setTeam(e, "defense")}
          >
            Defense
          </Button>
          <Button
            bg="#f7ba6f"
            _hover={{ background: "#ce9c5e" }}
            onClick={(e) => setTeam(e, "special-attack")}
          >
            Special Attack
          </Button>
          <Button
            bg="#9E4399"
            _hover={{ background: "#a45fd1" }}
            onClick={(e) => setTeam(e, "special-defense")}
          >
            Special Defense
          </Button>
          <Button
            bg="#FFCE4B"
            _hover={{ background: "#c5ca5a" }}
            onClick={(e) => setTeam(e, "speed")}
          >
            Speed
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
