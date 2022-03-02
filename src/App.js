import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./Redux/Action";
import { useState } from "react";
import ListOFUsers from "./ListOFUsers";
function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(user));
    setUser({ email: "", password: "" })
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <p>email</p>
          <input type="email" id="email" value={user.email} onChange={handleChange} />
        </div>
        <div>
          <p>password</p>
          <input type="password" id="password" value={user.password} onChange={handleChange} />
        </div>

        <button type="submit">submit</button>
      </form>
      <ListOFUsers />
    </div>
  );
}

export default App;
