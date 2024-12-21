// lib/db.ts
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const dbPath = path.join(process.cwd(), 'data', 'users.json');

interface User {
    id: number;
    name: string;
    email: string;
    img: string;
    token: string;
}

export function getUsers(): User[] {
    if (!fs.existsSync(dbPath)) {
        return [];
    }
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
}

export function saveUsers(users: User[]): void {
    const dirPath = path.dirname(dbPath);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync(dbPath, data);
}

export function addUser(user: Omit<User, 'id' | 'token'>): User {
    const users = getUsers();
    const newUser = {
        id: users.length + 1,
        ...user,
        token: uuidv4(),
    };
    users.push(newUser);
    saveUsers(users);
    return newUser;
}