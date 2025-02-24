interface User {
  type: 'user';
  id: string;
  userName: string;
}

interface Person {
  type: 'person';
  id: string;
  fullName: string;
}

const logDetails = (value: User | Person): void => {
  // alternative typechecking since typeof can be used with types but not interfaces
  if(value.type === 'user'){
    console.log(value.userName)
  }

  if(value.type === 'person'){
    console.log(value.fullName)
  }
}
