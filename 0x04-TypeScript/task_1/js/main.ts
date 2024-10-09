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

// Step 1: Interface for the constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Step 2: Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Step 3: Implement the StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns 'Currently working'
  workOnHomework(): string {
    return 'Currently working';
  }

  // Method that returns the first name of the student
  displayName(): string {
    return this.firstName;
  }
};

export { printTeacher, StudentClass };
