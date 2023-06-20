export type Spell = {
  name: string;
  book: string;
  description: string;
};

export type FetchedSpell = {
  id: string;
  EN: Spell;
  UA: Spell;
};
