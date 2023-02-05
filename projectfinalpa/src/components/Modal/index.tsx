/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */

import { useEffect, useState } from "react";
import * as S from "./styles";
import closeIcon from "../../assets/closeIcon.svg";
import TagType from "../Tag";
import StatsSection from "../StatsSection";
import ProgressState from "../ProgressState";
import { zeroPad } from "../../utils/capitalize";
import { ModalDefault } from "./interface";
import { Box, Image, Text } from "@chakra-ui/react";
import notFound from "../../assets/404poke.png";

const Modal = ({
  setOpenModal,
  order,
  bgColor,
  image,
  type,
  pokemonName,
  weight,
  height,
  abilities,
  stats,
}: ModalDefault) => {
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(true)
  const LoadDescription = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${order}/`
    ).catch(() => setLoading(false));
    const data = await res?.json();
    setDescription(data.flavor_text_entries[0].flavor_text);
  };

  useEffect(() => {
    LoadDescription();
  }, []);

  return (
    <>
      <S.Container>
        <S.ModalWrapper>
          {loading ? (
            <>
              <S.SideImage color={bgColor}>
                <S.ModalImg src={image} alt="pokemon" />
                <S.RowTags>
                  {type.map((data: { id: any; type: { name: any } }) => {
                    return (
                      <TagType size="high" key={data.id}>
                        {data?.type.name}
                      </TagType>
                    );
                  })}
                </S.RowTags>
              </S.SideImage>
              <S.ModalContent>
                <S.HeaderModal color={bgColor}>
                  <h1>{pokemonName}</h1>
                  <span>{zeroPad(order)}</span>
                </S.HeaderModal>
                <p>{description}</p>
                <StatsSection
                  weight={weight}
                  height={height}
                  ability={abilities}
                />
                <ProgressState stats={stats} />
              </S.ModalContent>{" "}
            </>
          ) : (
            <>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="absolute"
              >
                <Image
                  // position="absolute"
                  width="90%"
                  src={notFound}
                  alt="Not Found"
                />
                <Box backgroundColor="#f22036" width='100%' height='5rem' position='relative' textAlign='center' borderRadius='0 0 10px 10px' paddingTop='1rem'>
                  <Text fontWeight="bold">Eita! 🤨</Text>
                  <Text textAlign="center" fontWeight="semibold">
                    {" "}
                    Os detalhes sobre esse pokemon não foram encontrados...
                  </Text>
                </Box>
              </Box>
            </>
          )}
          <S.CloseModalButton
            aria-label="Close modal"
            src={closeIcon}
            onClick={() => {
              setLoading(true)
              setOpenModal(false);
            }}
          />
        </S.ModalWrapper>
      </S.Container>
    </>
  );
};

export default Modal;
