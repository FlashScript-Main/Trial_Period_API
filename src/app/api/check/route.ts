import { getUsers } from "@/utils/db";
import { NextResponse } from "next/server"

export const GET = async () => {
    const users = getUsers();
    return NextResponse.json(users)
}