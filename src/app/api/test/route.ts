import { users } from './test';
import { v4 as uuidv4 } from 'uuid';
import * as fs from "fs";

export const GET = async () => {
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
        "./src/app/api/test/test.ts",
        `export const users = ${updatedData};`,
        "utf-8"
    );

    return Response.json(
        { status: 201 }
    );
}