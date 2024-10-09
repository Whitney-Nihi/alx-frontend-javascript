interface Teacher {
  readonly firstName: string;   // Read-only, can only be set during initialization
  readonly lastName: string;    // Read-only, can only be set during initialization
  fullTimeEmployee: boolean;    // Required
  yearsOfExperience?: number;   // Optional
  location: string;             // Required
  [key: string]: any;           // Allows additional properties
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Additional property
};

console.log(teacher3);
