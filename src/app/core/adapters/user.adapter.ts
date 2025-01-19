import { RoleApi, UserApi, UserAuthApi, role, user, userAuth } from "../models/User";

export const userTransform = (user : UserApi): user => {
    const userApp: user = {
        id_user: user.usuarioId,
        name_user: user.nombres,
        email: user.correo,
        phone: user.telefono,
        role: roleTransform(user.roles),
        id_route: user.rutaId,
        token: user.token
    }
    return userApp
}

export const UserListTransform = (users: UserApi[] ): user[] => {
    if(!users.length) return []
    const users_app: user[] = users.map( user => {
        const userApp: user = {
            id_user: user.usuarioId,
            name_user: user.nombres,
            email: user.correo,
            phone: user.telefono,
            role: roleTransform(user.roles),
            id_route: user.rutaId,
            token: user.token
        }
        return userApp
    }) 
    return users_app
}

export const userAuthTransform = (user: userAuth):UserAuthApi => {
    const userAuth: UserAuthApi = {
        cuenta: user.user,
        contrasena: user.password
    }

    return userAuth
}

const roleTransform = (roles: RoleApi[] | undefined): role[] => {
    if(!roles) return []
    const roleApp : role[] = roles.map(role => {
        const roleTrans: role = {
            id_role: role.rolId,
            name_role: role.rolDescripcion
        }
        return roleTrans
    })
    return roleApp
}