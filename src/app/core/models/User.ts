export interface UserApi{
    token: string,
    usuarioId: number,
    correo: string,
    nombres: string,
    rutaId: number|null,
    telefono: string,
    roles: RoleApi[]
}

export interface UserAuthApi{
    cuenta: string;
    contrasena:string;
}
export interface user {
    id_user: number
    name_user: string;
    email: string;
    phone: string;
    role: role[];
    token?:string;
    id_route: number | null;

}
export interface userAuth{
    user: string;
    password: string;
}
export interface role{
    id_role: number;
    name_role: string;
}

export interface RoleApi{
    rolId: number;
    rolDescripcion: string
}