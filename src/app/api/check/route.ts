/*
import { getUsers } from "@/utils/db";
// import { NextResponse } from "next/server"

export const GET = async () => {
    // const newUUID = uuidv4();
    // return Response.json(newUUID);
    const users = getUsers();
    
    return Response.json(
        { users },
        { status: 200 }
    );
}
*/

import useUserStore from '@/store/userStore';

export const GET = async () => {
    const users = useUserStore.getState().getUsers();
    
    return Response.json(
        { users },
        { status: 200 }
    );
}