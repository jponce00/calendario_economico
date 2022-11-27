import {Mongo} from 'meteor/mongo';

/*-------------- Coleccion que almacena los perfiles de usuario --------------*/
export const Profile = new Mongo.Collection('profiles');