export type Professor = {
  name: string;
  portrait: string;
  subject: string;
  workPeriod: string;
  description: string;
  interestingFact: string;
};

export type FetchedProfessor = {
  id: string;
  EN: Professor;
  UA: Professor;
};
