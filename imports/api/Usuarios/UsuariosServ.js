export default {
    validateEmail(newEmail, idUser) {
        const existsEmail = Accounts.findUserByEmail(newEmail);
        if (idUser) {
            const oldUser = Meteor.users.findOne(idUser);
            if (oldUser.emails[0].address !== newEmail && existsEmail) {
                throw new Meteor.Error('403', 'El nuevo email ya se encuentra en uso');
            }
        } else if (existsEmail) {
            throw new Meteor.Error('403', 'El email ya se encuentra en uso');
        }
    },

    validateUserName(newUserName, idUser) {
        const existsUserName = Accounts.findUserByUsername(newUserName);
        if (idUser) {
            const oldUser = Meteor.users.findOne(idUser);
            if (oldUser.username !== newUserName && existsUserName) {
                throw new Meteor.Error('403', 'El nuevo nombre de usuario ya se encuentra en uso');
            }
        } else if (existsUserName) {
            throw new Meteor.Error('403', 'El nombre de usuario ya se encuentra en uso');
        }
    },

    createUser(user) {
        Accounts.createUser({
            username: user.username,
            email: user.emails[0].address,
            profile: user.profile,
            password: user.password
        });
    },

    updateUser(user) {
        const currentUser = Meteor.users.findOne(user._id);

        // Actualizar correo electronico
        if (currentUser.emails[0].address !== user.emails[0].address) {
            Accounts.removeEmail(currentUser._id, currentUser.emails[0].address);
            Accounts.addEmail(currentUser._id, user.emails[0].address);
        }

        // Actualizar nombre de usuario:
        if (currentUser.username !== user.username) {
            Accounts.setUsername(currentUser._id, user.username);
        }

        // Actualizar demas campos:
        Meteor.users.update(user._id, {
            $set: {
                profile: {
                    profile: user.profile.profile,
                    name: user.profile.name,
                    path: user.profile.path
                }
            }
        });
    }
}