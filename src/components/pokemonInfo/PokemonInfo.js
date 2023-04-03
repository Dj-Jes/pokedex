import React from 'react';

const PokemonInfo = ({ pokemon }) => {
    if (!pokemon) {
        return <div>No pokemon selected</div>;
    }

    return (
        <div className="pokemon-info">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div className="pokemon-stats">
                <div>Height: {pokemon.height} cm</div>
                <div>Weight: {pokemon.weight} kg</div>
                <div>Type: {pokemon.types.map(type => type.type.name).join(', ')}</div>
            </div>
        </div>
    );
};

export default PokemonInfo;
