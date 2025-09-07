"use server";

import fs from 'fs/promises';
import path from 'path';

export async function handleSignup(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { success: false, message: 'Email and password are required.' };
  }

  const newUser = {
    id: Date.now(),
    email,
    name: email.split('@')[0],
    signupDate: new Date().toISOString().split('T')[0],
  };

  try {
    const usersFilePath = path.join(process.cwd(), 'server', 'users.json');
    await fs.mkdir(path.dirname(usersFilePath), { recursive: true });

    let users = [];
    try {
      const fileContent = await fs.readFile(usersFilePath, 'utf-8');
      if (fileContent) {
        users = JSON.parse(fileContent);
      }
    } catch {
      // File might not exist yet, which is fine
    }

    users.push(newUser);
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
    
    return { success: true, message: 'Account created successfully!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to create account.' };
  }
}
