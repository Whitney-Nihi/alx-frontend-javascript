interface Teacher {
  readonly firstName: string;   // Read-only, can only be set during initialization
  readonly lastName: string;    // Read-only, can only be set during initialization
  fullTimeEmployee: boolean;    // Required
  yearsOfExperience?: number;   // Optional
  location: string;             // Required
  [key: string]: any;           // Allows additional properties
}

interface Directors extends Teacher {
  numberOfReports: number;      // Required for Directors

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
