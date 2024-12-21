import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  // Assuming the image is named 'example.jpg' in the public folder
  const imagePath = path.join(process.cwd(), 'public', 'flash-script.jpeg');

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error reading image:', error);
    return NextResponse.json({ error: 'Image not found' }, { status: 404 });
  }
}

const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
]

// export const GET = async () => {
//     return Response.json(users);
// }

export const POST = async (request: Request) => {
    const user = await request.json();

    const newUser = {
        id: users.length + 1,
        name: user.name,
        email: user.email,
    }

    users.push(newUser);

    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}