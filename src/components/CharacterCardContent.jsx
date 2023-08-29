import React from "react";

const TextField = ({ label, value }) => (
  <div className="flex gap-2">
    <span className="text-yellow-500 text-2xl font-title">{label}:</span>
    <span className="text-yellow-400 text-2xl font-title">{value}</span>
  </div>
);

function CharacterCardContent({ alias, specie, status, episodes }) {
  return (
    <div className="flex flex-col mt-2">
      <TextField label="Alias" value={alias} />
      <TextField label="Species" value={specie} />
      <TextField label="Status" value={status} />
      <TextField label="Episodes" value={episodes.length} />
    </div>
  );
}

export default CharacterCardContent;
