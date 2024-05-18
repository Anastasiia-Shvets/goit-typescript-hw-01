type UserData = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<UserData>) {
  console.log(initialValues);
  
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
