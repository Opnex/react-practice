import { useState } from "react";
import UserForm from "./UserForm";

function Parent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  function handleFormSubmit(formData) {
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setEmail(formData.email);
  }
  
  return (
    <div>
      <h2>User Info:</h2>
      <p>{firstName} {lastName}</p>
      <p>{email}</p>
      
      <UserForm onSubmit={handleFormSubmit} />
    </div>
  );
}


export default Parent