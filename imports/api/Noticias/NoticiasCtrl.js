import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {Noticia} from './Noticia';
import { ResponseMessage } from '../../startup/server/utilities/ResponseMessage';
import {ValidatedMethod} from 'meteor/mdg:validated-method';

new ValidatedMethod({
    name: 'guardar.noticia',
    validate(noticia) {
        try {
            check(noticia, {
                _id: Match.OneOf(String, null),
                nombre: String,
                importancia: String,
                pais: {
                    pais: String,
                    divisa: String,
                },
                hora: String,
                actual: Number,
                prevision: Number,
                anterior: Number,
                descripcion: String,
                fuente: String
            });
        } catch (exception) {
            console.error('guardar.noticia', exception);
            throw new Meteor.Error('403', 'La informacion introducida no es valida.');
        }
    },
    run(noticia) {
        const responseMessage = new ResponseMessage();
        try {
            Noticia.insert({
                nombre: noticia.nombre,
                importancia: noticia.importancia,
                pais: noticia.pais,
                hora: noticia.hora,
                actual: noticia.actual,
                prevision: noticia.prevision,
                anterior: noticia.anterior,
                descripcion: noticia.descripcion,
                fuente: noticia.fuente
            });
            responseMessage.create('Se creo la noticia exitosamente.');
        } catch(exception) {
            console.error('guardar.noticia', exception);
            throw new Meteor.Error('403', 'Ocurrio un error al crear la noticia.');
        }
        return responseMessage;
    }
});