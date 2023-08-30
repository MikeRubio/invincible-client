import CharacterCard from "./CharacterCard";
import CharactersLoading from "./CharactersLoading";
import useCharacters from "../../graphql/useCharacters";
import { error_img } from "../../assets/index";

const Characters = () => {
  const { data, loading, error } = useCharacters();

  if (error)
    return (
      <div className="flex justify-center p-3 bg-slate-700 ">
        <img className="" src={error_img}></img>
      </div>
    );
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
