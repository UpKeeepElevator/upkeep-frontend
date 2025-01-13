import { RoleApi, UserApi, UserAuthApi, role, user, userAuth } from "../models/User";

export const userTransform = (user : UserApi) => {
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

export const userAuthTransform = (user: userAuth) => {
    const userAuth: UserAuthApi = {
        cuenta: user.user,
        contrasena: user.password
    }

    return userAuth
}

const roleTransform = (roles: RoleApi[]) => {

    const roleApp : role[] = roles.map(role => {
        const roleTrans: role = {
            id_role: role.rolId,
            name_role: role.rolDescripcion
        }
        return roleTrans
    })
    return roleApp
}