import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { email, password } = await request.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return NextResponse.json({ message: 'Logged in successfully', token }, { status: 200 });
  } 
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  catch (error: any) {
    return NextResponse.json({ message: 'Failed to login', error: error.message }, { status: 500 });
  }
}
