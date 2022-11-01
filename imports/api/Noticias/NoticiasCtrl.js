import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {News} from './Noticia';
import {ResponseMessage} from '../../startup/server/utilities/ResponseMessage';
import {ValidatedMethod} from 'meteor/mdg:validated-method';

new ValidatedMethod({
    name: 'news.save',
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
        try {            
            News.insert({
                name: news.name,
                importance: news.importance,
                year: news.year,
                month: news.month,
                day: news.day,
                createdAt: new Date(),
                country: news.country,
                hour: news.hour,
                minutes: news.minutes,
                actual: news.actual,
                forecast: news.forecast,
                previous: news.previous,
                description: news.description,
                source: news.source
            });
            responseMessage.create('Se creo la noticia exitosamente.');
        } catch (exception) {
            console.error('create.news', exception);
            throw new Meteor.Error('403', 'Ocurrio un error al crear la noticia.');
        }
        return responseMessage;
    }
});