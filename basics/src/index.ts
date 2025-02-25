enum TYPE {
  USER = 'user',
  PERSON = 'person'
}
interface User {
  type: TYPE.USER;
  id: string;
  userName: string;
}

interface Person {
  type: TYPE.PERSON;
  id: string;
  fullName: string;
}

const logDetails = (value: User | Person): void => {
  // alternative typechecking since typeof can be used with types but not interfaces
  if(value.type === TYPE.USER){
    console.log(value.userName)
  }

  if(value.type === TYPE.PERSON){
    console.log(value.fullName)
  }
}
