import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: 'User registered successfully', user }, { status: 201 });
  } catch (/* eslint-disable-next-line @typescript-eslint/no-explicit-any */error: any) {
    if (error.code === 11000) {
      return NextResponse.json({ message: 'Username or email already exists' }, { status: 409 });
    }
    return NextResponse.json({ message: 'Failed to register user', error: error.message }, { status: 500 });
  }
}