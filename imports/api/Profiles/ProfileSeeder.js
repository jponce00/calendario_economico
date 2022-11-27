// @ts-nocheck
import Permisssions, {permissionsArray} from '../../startup/server/Permissions';
import { Profile } from './Profile';

/*-------------- Constante con los perfiles predefinidos --------------*/
export const StaticProfiles = {
    admin: {
        name: 'admin',
        description: 'Administrador',
        permissions: permissionsArray.map(p => p.VALUE)
    }
}

/*-------------- Actualizar coleccion de perfiles y roles asignados --------------*/
if (Meteor.isDevelopment) {
    if (Meteor.settings.private && Meteor.settings.private.REFRESH_STATIC_PROFILES) {
        console.log('Updating static profiles...');
        Object.keys(StaticProfiles).forEach(staticProfileName => {
            Profile.upsert({name: StaticProfiles[staticProfileName].name}, {
                $set: {
                    description: StaticProfiles[staticProfileName].description,
                    permisssions: StaticProfiles[staticProfileName].permissions
                }
            });
            Meteor.users.find({'profile.profile': StaticProfiles[staticProfileName].name}).fetch().forEach(user => {
                Meteor.roleAssignment.remove({'user._id': user._id});
                if (StaticProfiles[staticProfileName].permissions.length) {
                    Roles.setUserRoles(user._id, StaticProfiles[staticProfileName].permissions, StaticProfiles[staticProfileName].name);
                }
            });
        });
    }
}