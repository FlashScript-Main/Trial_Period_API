import { NextResponse } from "next/server"
import { users } from "../users/route"

export const GET = async () => {
    return NextResponse.json(users)
}