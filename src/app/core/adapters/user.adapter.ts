import { UserApi, UserAuthApi, user, userAuth } from "../models/User";

export const userTransform = (user : UserApi) => {
    const userApp: user = {
        id_user: user.usuarioId,
        name_user: user.nombres,
        email: user.correo,
        phone: user.telefono,
        role: user.roles,
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