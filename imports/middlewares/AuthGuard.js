// @ts-nocheck

/*-------------- Funcion para comprobar si el usuario cuenta con los permisos requeridos para usar un endpoint --------------*/
const checkPermission = function(methodArgs, methodOptions) {
    const idUser = this.userId;
    const permissions = methodOptions.permissions;
    let hasPermission = false;

    if (idUser !== null) {
        const profileName = Meteor.user().profile.profile;
        hasPermission = Roles.userIsInRole(idUser, permissions, profileName);
    }
    if (!hasPermission) {
        throw new Meteor.Error('403', 'Acceso denegado', 'No tienes permiso para ejecutar esta accion.');
    }
    return methodArgs;
}

export default checkPermission;