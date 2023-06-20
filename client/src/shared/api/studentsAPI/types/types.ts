export type Student = {
  name: string;
  portrait: string;
  house: string;
  description: string;
  interestingFacts: string[];
};

export type FetchedStudent = {
  id: string;
  EN: Student;
  UK: Student;
};
