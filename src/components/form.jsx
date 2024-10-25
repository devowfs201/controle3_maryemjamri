import { useRef } from "react";
import { useUserReducer } from "./reducer"; 

const Form = () => {
  const nameRef = useRef("");
  const usernameRef = useRef("");
  const emailRef = useRef("");
 

  const { state, addUser, deleteUser, updateUser } = useUserReducer(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newuser = {
      id: Date.now(), 
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
     
    };

   
    addUser(newuser);


    nameRef.current.value = "";
    usernameRef.current.value = "";
    emailRef.current.value = "";
  
  };

  return (
    <div>
      
      <h2 className="mb-4">New user</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            name:
          </label>
          <input
            type="text"
            ref={nameRef}
            className="form-control"
            id="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            username:
          </label>
          <input
            type="text"
            ref={usernameRef}
            className="form-control"
            id="username"
            required
          />
        </div>




        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email:
          </label>
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            id="email"
            required
          />
        </div>

      

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

     
      <h3 className="mt-5">Home page</h3>
      {state.users.length > 0 ? (
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">userName</th>
              <th scope="col">email</th>
             
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                
                <td>{user.username}</td>
                <td>{user.email}</td>
              
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)} 
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => updateUser(user.id)} 
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
};

export default Form;
