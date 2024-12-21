// import { users } from '@/utils/db';
import { v4 as uuidv4 } from 'uuid';

export const users = [
    { 
        id: 1, 
        name: "Alice", 
        email: "alice@example.com", 
        img: "https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        token: "61cd2e24-ad18-4c2d-9aa0-caa0beef37a4" 
    },
    { 
        id: 2, 
        name: "Bob", 
        email: "bob@example.com", 
        img: "https://images.unsplash.com/photo-1721332153370-56d7cc352d63?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        token: "556171ca-a4c6-4964-962c-0bf4607eb4aa" 
    },
    { 
        id: 3, 
        name: "Charlie", 
        email: "charlie@example.com", 
        img: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        token: "2f9df708-8be9-4a80-b754-109a1956ac4f" 
    },
    { 
        id: 4, 
        name: "David", 
        email: "david@example.com", 
        img: "https://images.unsplash.com/photo-1611942600909-d7e4c0f1b1c4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        token: "e4f6d5c0-a0a9-4a1f-b8d9-f2f3a8f0f4d4" 
    },
    { 
        id: 5, 
        name: "Eve", 
        email: "eve@example.com", 
        img: "https://images.unsplash.com/photo-1610806886287-d7f1c6f7d4f4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        token: "e4f6d5c0-a0a9-4a1f-b8d9-f2f3a8f0f4d4" 
    },
]

export const GET = async () => {
    // const newUUID = uuidv4();
    // return Response.json(newUUID);
    return Response.json(
        { users },
        { status: 200 }
    );
}

export const POST = async (request: Request) => {
    const user = await request.json();
    const newUUID = uuidv4();
    const newUser = {
        id: users.length + 1,
        name: user.name,
        email: user.email,
        img: user.img,
        token: newUUID,
    }

    users.push(newUser);

    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}


/*
export const GET = async () => {
    // const newUUID = uuidv4();
    // return Response.json(newUUID);
    return Response.json(
        { users },
        { status: 200 }
    );
}

export const POST = async (request: Request) => {

    const user = await request.json();

    const newUUID = uuidv4();
    
    const newUser = {
        id: users.length + 1,
        name: user.name,
        email: user.email,
        img: user.img,
        token: newUUID,
    }

    users.push(newUser);

    const updatedUsersArray = users;

    const updatedData = JSON.stringify(updatedUsersArray, null, 2);

    fs.writeFileSync(
        "./src/utils/db.ts",
        `export const users = ${updatedData};`,
        { encoding: "utf-8" }
    );

    return NextResponse.json(
        { success: "New User Successfully Created" }
    );
}
*/