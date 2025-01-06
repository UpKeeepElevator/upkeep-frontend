export interface user {
    cod_user: number
    name_user: string;
    user: string;
    password: string;
    role: role;
}

export interface role{
    cod_role: number;
    name_role: string;
}