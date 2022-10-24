import {Meteor} from 'meteor/meteor';
import {Noticia} from './Noticia';

Meteor.publish('listar.noticias', function() {
    return Noticia.find();
});