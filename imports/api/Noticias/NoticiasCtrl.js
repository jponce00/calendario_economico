// @ts-nocheck
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {ResponseMessage} from '../../startup/server/utilities/ResponseMessage';
// @ts-ignore
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import NoticiasServ from './NoticiasServ';
import checkPermission from '/imports/middlewares/AuthGuard';
import Permissions from '/imports/startup/server/Permissions';

new ValidatedMethod({
    name: 'news.save',
    mixins: [MethodHooks],
    permissions: [Permissions.NEWS.CREATE.VALUE, Permissions.NEWS.UPDATE.VALUE],
    beforeHooks: [checkPermission],
    validate(news) {
        check(news, {
            _id: Match.OneOf(String, null),
            name: String,
            importance: String,
            year: String,
            month: String,
            day: String,
            country: {
                country: String,
                region: String,
                currency: String,
                flag: String
            },
            hour: String,
            minutes: String,
            actual: Number,
            forecast: Number,
            previous: Number,
            description: String,
            source: String
        });
    },
    run(news) {
        const responseMessage = new ResponseMessage();
        if (news._id !== null) {
            try {
                NoticiasServ.updateNews(news);
                responseMessage.create('Se actualizo la noticia exitosamente.');
            } catch (exception) {
                console.error('create.news', exception);
                throw new Meteor.Error('500', 'Ocurrio un error al actualizar la noticia.');
            }
        } else {
            try {            
                NoticiasServ.createNews(news);
                responseMessage.create('Se creo la noticia exitosamente.');
            } catch (exception) {
                console.error('create.news', exception);
                throw new Meteor.Error('500', 'Ocurrio un error al crear la noticia.');
            }
        }
        
        return responseMessage;
    }
});

new ValidatedMethod({
    name: 'news.delete',
    mixins: [MethodHooks],
    permissions: [Permissions.NEWS.DELETE.VALUE],
    beforeHooks: [checkPermission],
    validate(news) {
        try {
            check(news._id, String);
        } catch (exception) {
            console.error('create.news', exception);
            throw new Meteor.Error('403', 'Los datos ingresados no son correctos..');
        }
    },
    run(news) {
        const responseMessage = new ResponseMessage();
        try {
            NoticiasServ.deleteNews(news._id);
            responseMessage.create('Se elimino la noticia exitosamente.');
        } catch (exception) {
            console.error('create.news', exception);
            throw new Meteor.Error('500', 'Ocurrio un error al eliminar la noticia.');
        }
        return responseMessage;
    }
});