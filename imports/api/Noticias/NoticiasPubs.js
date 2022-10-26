import {Meteor} from 'meteor/meteor';
import {News} from './Noticia';

// Metodo para listar todo el contenido:
Meteor.publish('news.list', function() {
    return News.find({}, {
        sort: {createdAt: -1}
    });
});

// Metodo para filtrar por tipo de importancia:
Meteor.publish('news.importance', function(param1=null, param2=null, param3=null) {
    return News.find({
        $or: [{importance: param1}, {importance: param2}, {importance: param3}]
    },
    {
        sort: {createdAt: -1}
    });
});

// Metodo para filtrar por region:
Meteor.publish('news.region', function(param1=null, param2=null, param3=null) {
    return News.find({
        $or: [{"country.region": param1}, {"country.region": param2}, {"country.region": param3}]
    },
    {
        sort: {createdAt: -1}
    });
})

// Metodo para solo mostrar las noticias de hoy:
Meteor.publish('news.today', function() {
    let actualYear = new Date().getFullYear().toString();
    let actualMonth = (new Date().getMonth() + 1).toString();
    let actualDay = new Date().getDate().toString();
    
    return News.find({
        $and: [{year: actualYear}, {month: actualMonth}, {day: actualDay}]
    },
    {
        sort: {createdAt: -1}
    });
});

// Metodo para solo mostrar las noticias de ayer:
Meteor.publish('news.yesterday', function() {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let pdYear = yesterday.getFullYear().toString();
    let pdMonth = (yesterday.getMonth() + 1).toString();
    let pdDay = yesterday.getDate().toString(); // pd: previous date
    
    return News.find({
        $and: [{year: pdYear}, {month: pdMonth}, {day: pdDay}]
    },
    {
        sort: {createdAt: -1}
    });
});