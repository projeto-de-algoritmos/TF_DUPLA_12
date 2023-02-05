import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation } from "react-router";
import PokemonCard from "../../components/PokemonCard";
import TeamProps from "../../interface/Team";

const Team: React.FC = () => {
  const location: any = useLocation();

  const data = location.state;

  return (
    <>
      <Box position="fixed" right="0" left="0" top="10%">
        <Text fontWeight="extrabold" fontSize="2rem" textAlign="center">
          {" "}
          Sua equipe que será campeã baseado no atributo selecionado.😎
          <Text fontWeight="medium" fontSize="2rem" textAlign="center">
            {" "}
            Obs: Clique no card para obter mais detalhes.
          </Text>
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
            gap="4"
          >
            {data &&
              data.pokemons.map((data: any, index: any) => {
                return (
                  <PokemonCard
                    key={index}
                    name={data.name}
                    order={data.order}
                    type={data.types}
                    image={
                      data.sprites.other.dream_world.front_default !== null
                        ? data.sprites.other.dream_world.front_default
                        : data.sprites.other["official-artwork"]?.front_default
                    }
                    weight={data.weight}
                    height={data.height}
                    abilities={data.abilities[0].ability.name}
                    stats={data.stats}
                  />
                );
              })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Team;
