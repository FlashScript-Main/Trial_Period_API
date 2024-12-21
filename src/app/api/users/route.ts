const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
]

export const GET = async () => {
    return Response.json(users);
}

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