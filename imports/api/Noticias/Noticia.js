import {Mongo} from 'meteor/mongo';

/*-------------- Coleccion que almacena las noticias --------------*/
export const News = new Mongo.Collection('news');