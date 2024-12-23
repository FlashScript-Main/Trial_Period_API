// import { getUsers } from "@/utils/db";

import { users } from "../test/test";

// import { NextResponse } from "next/server"
export const GET = async () => {
    // const newUUID = uuidv4();
    // return Response.json(newUUID);
    
    return Response.json(
        { users },
        { status: 200 }
    );
}

/*
import useUserStore from '@/store/userStore';

export const GET = async () => {
    const users = useUserStore.getState().getUsers();
    
    return Response.json(
        { users },
        { status: 200 }
    );
}
*/