export interface Professor {
  name: string;
  portrait: string;
  subject: string;
  startWork: string | Date;
  endWork: string | Date;
  descritpion: string;
  interestingFacts: string[];
}

export const ProfessorsEN: Professor[] = [];

export const ProfessorsUA: Professor[] = [];
