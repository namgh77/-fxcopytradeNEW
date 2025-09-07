"use client";

import React, { useState } from 'react';
import { handleSignup } from './actions';

const InputField = ({ label, type = 'text', placeholder, id, name }: { label: string; type?: string; placeholder?: string; id: string; name?: string; }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input type={type} id={id} name={name || id} placeholder={placeholder} className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500" />
  </div>
);

const LoginForm = () => (
  <form className="space-y-6">
    <InputField id="login-email" type="email" label="Email" placeholder="you@example.com" />
    <InputField id="login-password" type="password" label="Password" placeholder="•••••••••" />
    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">Sign In</button>
  </form>
);

const SignupForm = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await handleSignup(formData);
    setMessage(result.message);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField id="signup-email" name="email" type="email" label="Email" placeholder="you@example.com" />
      <InputField id="signup-password" name="password" type="password" label="Password" placeholder="Create a password" />
      <InputField id="signup-confirm-password" type="password" label="Confirm Password" placeholder="Confirm your password" />
      <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">Create Account</button>
      {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
    </form>
  );
};

export default function LoginPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">{isLoginView ? 'Welcome Back' : 'Create Your Account'}</h1>
        <p className="text-center text-gray-600 mb-8">{isLoginView ? 'Sign in to access your dashboard' : 'Get started with our platform'}</p>
        
        {isLoginView ? <LoginForm /> : <SignupForm />}

        <div className="text-center mt-6">
          <button onClick={() => setIsLoginView(!isLoginView)} className="text-sm text-blue-600 hover:underline">
            {isLoginView ? "Don&apos;t have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}
