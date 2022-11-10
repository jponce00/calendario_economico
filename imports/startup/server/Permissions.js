// @ts-nocheck
const Permissions = {
    USERS: {
        LIST: {VALUE: 'users-view', TEXT: 'Listar usuarios'},
        CREATE: {VALUE: 'users-create', TEXT: 'Crear usuarios'},
        UPDATE: {VALUE: 'users-update', TEXT: 'Actualizar usuarios'},
        DELETE: {VALUE: 'users-delete', TEXT: 'Eliminar usuarios'}
    },
    PROFILES: {
        LIST: {VALUE: 'profiles-view', TEXT: 'Listar perfiles'},
        CREATE: {VALUE: 'profiles-create', TEXT: 'Crear perfiles'},
        UPDATE: {VALUE: 'profiles-update', TEXT: 'Actualizar perfiles'},
        DELETE: {VALUE: 'profiles-delete', TEXT: 'Eliminar perfiles'}
    },
    NEWS: {
        LIST: {VALUE: 'news-view', TEXT: 'Listar noticias'},
        CREATE: {VALUE: 'news-create', TEXT: 'Crear noticias'},
        UPDATE: {VALUE: 'news-update', TEXT: 'Actualizar noticias'},
        DELETE: {VALUE: 'news-delete', TEXT: 'Eliminar noticias'}
    }
};

export const permissionsArray = Object.keys(Permissions).reduce((accumulator, systemModuleName) => {
    const systemModuleObject = Permissions[systemModuleName];
    const modulePermissions = Object.keys(systemModuleObject).map(permission => systemModuleObject[permission]);
    return accumulator.concat(modulePermissions);
}, []);

if (Meteor.isDevelopment) {
    if (Meteor.settings.private && Meteor.settings.private.REFRESH_PERMISSIONS) {
        console.log('Updating permissions...');
        const currentRoles = Roles.getAllRoles().fetch();
        for (let permission of permissionsArray) {
            if (!currentRoles.find(_role => _role._id === permission.VALUE)) {
                Roles.createRole(permission.VALUE);
            }
            Meteor.roles.update(permission.VALUE, {
                $set: {
                    publicName: permission.TEXT
                }
            });
        }
    }
}



export default Permissions;