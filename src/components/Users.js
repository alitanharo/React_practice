import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainProvider";
import { useNavigate } from "react-router";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", username: "" });
  const { setSelectedUser } = useContext(MainContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name, username } = form;
    setUsers((users) => [...users, { id: users.length + 1, name, username }]);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const handleGetData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsers(data);
    };
    handleGetData();
  }, []);
  const handleDelete = (id) => {
    setUsers((users) => users.filter((item) => item.id !== id));
  };

  const row = users.map((item, index) => {
    return (
      <tr
        key={item.id}
        onClick={() => navigate(`/detail/${item.id}`, { state: item })}
      >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input name="name" />
        <input name="username" />
        <button> Add</button>
      </form>
      <table>
        <thead>
          <th> #</th>
          <th>name</th>
          <th> Username</th>
          <th>remove</th>
        </thead>
        <tbody>{row}</tbody>
      </table>
      <hr />
    </div>
  );
};

export default Users;
