import {News} from './Noticia';

export default {
    /*-------------- Guardar la noticia en la coleccion --------------*/
    createNews(news) {
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
    },

    /*-------------- Actualizar la noticia en la coleccion --------------*/
    updateNews(news) {        
        News.update(news._id, {
            name: news.name,
            importance: news.importance,
            year: news.year,
            month: news.month,
            day: news.day,
            country: news.country,
            hour: news.hour,
            minutes: news.minutes,
            actual: news.actual,
            forecast: news.forecast,
            previous: news.previous,
            description: news.description,
            source: news.source
        });
    },

    /*-------------- Eliminar la noticia de la coleccion --------------*/
    deleteNews(idNews) {
        News.remove(idNews);
    }

}