import React, { BaseSyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Button, Grid, Image, Spinner } from "@chakra-ui/react";
import axios from "axios";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setTeam = async (e: BaseSyntheticEvent, mode: string) => {
    console.log(e, mode);
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
