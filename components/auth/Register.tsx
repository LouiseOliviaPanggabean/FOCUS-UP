import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { User } from '../../types';
import { EyeIcon, EyeOffIcon } from '../icons/SidebarIcons';

interface RegisterProps {
  onRegisterSuccess: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegisterSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [users, setUsers] = useLocalStorage<User[]>('focusup-users', []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (users.find(u => u.email === email)) {
      setError('An account with this email already exists.');
      return;
    }

    const newUser: User = {
      id: new Date().toISOString(),
      name,
      email,
      password,
      joinDate: new Date().toISOString(),
    };

    const newUsers = [...users, newUser];
    // Manually and synchronously update localStorage to prevent race condition
    localStorage.setItem('focusup-users', JSON.stringify(newUsers));
    setUsers(newUsers);

    onRegisterSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-danger text-sm text-center">{error}</p>}
      <div>
        <label htmlFor="name-register" className="block text-sm font-medium text-muted dark:text-dark-muted mb-2">
          Name
        </label>
        <input
          type="text"
          id="name-register"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-light dark:bg-dark-bg border-gray-300 dark:border-gray-600 text-dark dark:text-dark-text rounded-md p-2 focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email-register" className="block text-sm font-medium text-muted dark:text-dark-muted mb-2">
          Email
        </label>
        <input
          type="email"
          id="email-register"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-light dark:bg-dark-bg border-gray-300 dark:border-gray-600 text-dark dark:text-dark-text rounded-md p-2 focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="password-register" className="block text-sm font-medium text-muted dark:text-dark-muted mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password-register"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full bg-light dark:bg-dark-bg border-gray-300 dark:border-gray-600 text-dark dark:text-dark-text rounded-md p-2 pr-10 focus:ring-primary focus:border-primary"
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted dark:text-dark-muted"
            aria-label={isPasswordVisible ? "Sembunyikan password" : "Tampilkan password"}
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>
      <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300">
        Sign Up
      </button>
    </form>
  );
};

export default Register;