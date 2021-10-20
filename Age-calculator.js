//We've been given access to a database that contains all of the users for the PlentyOfDevs dating site. 
//This database contains every user's date of birth,
//But users have complained about having to figure out someone's age using just their date of birth. 
//we will write a function that determines someone's age, given their date of birth.


const ageCalculator = (name, yearOfBirth, currentYear) => {
  let age = currentYear - yearOfBirth;
  return (name + " is " + (currentYear - yearOfBirth) + " years old.");
};

