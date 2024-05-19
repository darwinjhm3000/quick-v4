import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular autenticación
    if (username === 'admin' && password === 'password') {
      navigate('/'); // Usa navigate para redirigir
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <img src="/logo.png" alt="Logo" className="absolute top-4 left-4 w-12 h-12" />
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center w-full max-w-md" style={{ height: '500px' }}>
        <div className="flex justify-center mb-8">
          <img src="/form-logo.png" alt="Form Logo" className="w-24 h-24" />
        </div>
        <h1 className="text-3xl text-center font-semibold mb-10">Ingresa a tu cuenta</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="border p-3 rounded-lg"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border p-3 rounded-lg"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-30"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="flex gap-2 mt-5 justify-center">
          <p>¿Aún no tienes cuenta?</p>
          <Link to="/signup">
            <span className="text-blue-700">Crea una cuenta aquí</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
