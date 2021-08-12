import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('');

  const handleSearch = async () => {
    const response = await axios.get(`https://api.github.com/users/${user}/repos`);
    console.log(response.data);
  }

  return (
    <>
      <input
        name="user"
        className="inputUser"
        placeholder="Usuário"
        value={ user }
        onChange={({ target: { value } }) => setUser(value) }
      />
      <button
        type="button"
        onClick={ handleSearch }
      >
        Pesquisar
      </button>
    </>
  );
}

export default App;
