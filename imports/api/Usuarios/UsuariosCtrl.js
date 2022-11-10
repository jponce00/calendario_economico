// @ts-nocheck
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {check, Match} from 'meteor/check';
import UsuariosServ from './UsuariosServ';
import {ResponseMessage} from '../../startup/server/utilities/ResponseMessage';
import checkPermission from '/imports/middlewares/AuthGuard';
import Permissions from '/imports/startup/server/Permissions';

Accounts.validateLoginAttempt(loginAttempt => {
    if (loginAttempt.allowed) {
        const loginTokensOfUser = loginAttempt.user.services.resume?.loginTokens || [];
        if (loginTokensOfUser.length > 1) {
            Meteor.users.update(loginAttempt.user._id, {
                $set: {
                    'services.resume.loginTokens': [loginTokensOfUser.pop()]
                }
            });
        }
        return true;
    }
});

new ValidatedMethod({
    name: 'user.save',
    mixins: [MethodHooks],
    permissions: [Permissions.USERS.CREATE.VALUE, Permissions.USERS.UPDATE.VALUE],
    beforeHooks: [checkPermission],
    validate(user) {
        try {
            check(user, {
                _id: Match.OneOf(String, null),
                username: String,
                emails: [{address: String, verified: Boolean}],
                profile: {
                    profile: String,
                    name: String,
                    path: Match.OneOf(String, null)
                },
                password: String
            });
        } catch (exception) {
            console.error('user.save', exception);
            throw new Meteor.Error('403', 'La informacion introducida no es valida.');
        }
        UsuariosServ.validateEmail(user.emails[0].address, user._id);
        UsuariosServ.validateUserName(user.username, user._id);
    },
    run(user) {
        console.log('Id del usuario logueado: ', this.userId);
        const responseMessage = new ResponseMessage();
        
        if (user._id !== null) {
            try {
                UsuariosServ.updateUser(user);
                responseMessage.create('Se ha actualizado el usuario exitosamente.');
            } catch (exception) {
                console.log('user.save: ', exception);
                throw new Meteor.Error('500', 'Ocurrio un error al actualizar el usuario.');
            }
        } else {
            try {
                UsuariosServ.createUser(user);
                responseMessage.create('Se ha creado el usuario exitosamente.');
            } catch (exception) {
                console.log('user.save: ', exception);
                throw new Meteor.Error('500', 'Ocurrio un error al crear el usuario');
            }
        }
        return responseMessage;
    }
});

new ValidatedMethod({
    name: 'user.delete',
    mixins: [MethodHooks],
    permissions: [Permissions.USERS.DELETE.VALUE],
    beforeHooks: [checkPermission],
    validate({idUser}) {
        try {
            check(idUser, String);
        } catch (exception) {
            console.log('user.delete: ', exception);
            throw new Meteor.Error('403', 'La informacion introducida no es valida.');
        }
    },
    run({idUser}) {
        const responseMessage = new ResponseMessage();
        try {
            Meteor.users.remove(idUser);
            responseMessage.create('Se ha eliminado exitosamente el usuario.');
        } catch (exception) {
            console.log('user.delete: ', exception);
            throw new Meteor.Error('500', 'Ocurrio un error al eliminar el usuario.');
        }

        return responseMessage;
    }
});