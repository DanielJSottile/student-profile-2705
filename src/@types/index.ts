export interface StudentInformation {
  city: string;
  company: string;
  email: string;
  firstName: string;
  grades: string[];
  id: string;
  lastName: string;
  pic: string;
  skill: string;
}

export interface StudentData extends StudentInformation {
  tags: string[];
}
