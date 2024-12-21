const users = [
    { id: 1, name: "Alice", email: "alice@example.com", img: "https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Bob", email: "bob@example.com", img: "https://images.unsplash.com/photo-1721332153370-56d7cc352d63?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Charlie", email: "charlie@example.com", img: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
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
        img: user.img,
    }

    users.push(newUser);

    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}