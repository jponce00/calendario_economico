import {Meteor} from 'meteor/meteor';
import {News} from './Noticia';

/*-------------- Metodo para listar todo el contenido --------------*/
Meteor.publish('news.list', function() {
    return News.find();
});