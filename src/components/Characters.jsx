import CharacterCard from "./CharacterCard";
import CharactersLoading from "./CharactersLoading";
import useCharacters from "../graphql/useCharacters";

const Characters = () => {
  const { data, loading, isError, error } = useCharacters();

  if (isError) return <p>Error : {error.message}</p>;
  if (loading) return <CharactersLoading />;
  return (
    <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 gap-6 p-4">
      {data?.charactersById?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
