
"use client";
import React, { useState } from 'react';

function checkStrength(password: string): string {
  if (password.length < 6) return 'Weak';
  if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/)) return 'Strong';
  if (password.length >= 8) return 'Medium';
  return 'Weak';
}

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkStrength(value));
  };

  return (
    <div className="p-4 border rounded mb-6">
      <h2 className="text-xl font-bold mb-2">Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
        className="border p-2 mr-2 rounded"
      />
      {password && <span className="ml-2 font-semibold">Strength: {strength}</span>}
    </div>
  );
}
