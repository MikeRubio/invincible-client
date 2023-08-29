import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS_BY_IDS = gql`
  query Characters($characterIds: [ID!]!) {
    charactersById(characterIds: $characterIds) {
      id
      name
      status
      image
      specie
      home
      bio
      voiceBy
      age
      occupation
      placeOfBirth
      alias
      gender
      affiliations
      placeOfDeath
      causeOfDeath
      maritalStatus
      episodes {
        id
        title
        airDate
        status
        writers
        directors
        synopsis
      }
    }
  }
`;

const useCharacters = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS_BY_IDS, {
    variables: { characterIds: [12, 2, 9, 4, 5, 6, 7, 1] },
  });

  return { data, loading, error };
};

export default useCharacters;
