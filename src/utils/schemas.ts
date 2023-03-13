import { z } from "zod";

export const LeagueEnum = z.enum(["GENERIC", "GREATE", "ULTRA", "MASTER"]);

export const IV = z.object({
    attack: z.number(),
    defense: z.number(),
    hp: z.number(),
    league: LeagueEnum,
    level: z.number()
});

export const PokemonIV = z.object({
    dexNum: z.number(),
    pokemonName: z.string(),
    ivs: IV.array().optional()
});

export const IVList = z.object({
    name: z.string(),
    pokemonIVs: PokemonIV.array().optional()
})

// export type LeagueEnum = z.infer<typeof LeagueEnum>;
// export type IV = z.infer<typeof IV>;
// export type PokemonIV = z.infer<typeof PokemonIV>;
// export type IVList = z.infer<typeof IVList>;