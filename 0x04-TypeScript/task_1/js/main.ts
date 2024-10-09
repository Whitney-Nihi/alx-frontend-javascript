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
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
