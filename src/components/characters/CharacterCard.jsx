import React from "react";
import CharacterCardContent from "./CharacterCardContent";

function CharacterCard({ character }) {
  const { alias, specie, status, image, episodes } = character;
  return (
    <div
      className="bg-gray-800 text-white flex flex-col p-3 rounded-lg max-w-xs"
      onClick={() => console.log(character)}
    >
      <div>
        <img
          className="rounded-lg w-80 h-44 border-2 border-yellow-500"
          src={image[0]}
        />
      </div>
      <CharacterCardContent
        alias={alias}
        specie={specie}
        status={status}
        episodes={episodes}
      />
    </div>
  );
}

export default CharacterCard;
