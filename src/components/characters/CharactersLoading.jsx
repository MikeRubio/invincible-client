import React from "react";
import CharacterSkeleton from "./CharacterSkeleton";

function CharactersLoading() {
  return (
    <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 gap-6 p-4">
      <CharacterSkeleton />
      <CharacterSkeleton />
      <CharacterSkeleton />
      <CharacterSkeleton />
    </div>
  );
}

export default CharactersLoading;
