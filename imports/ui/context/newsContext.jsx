import React from 'react';
import { createContext, useState, useEffect, useLayoutEffect } from "react";
import {withTracker} from 'meteor/react-meteor-data';

import {News} from '../../api/Noticias/Noticia';

export const NewsContext = createContext({});

export const withNews = withTracker(() => {
    Meteor.subscribe('news.list');
	return {
		noticias: News.find({}, {
			sort: {hour:1, minutes:1}
		}).fetch()
	}
})

function NewsProvider(props) {
    const [noticiaEditar, setNoticiaEditar] = useState([]);

    function agregarNoticia(news) {
        Meteor.call('news.save', news, (error, response) => {
			if (error) {
				alert(error.reason);
			} else {
				alert(response.message);
			}
		});
    }

    function obtenerNoticia(idNoticia) {
        let eventoEditar = props.noticias.filter(noticia => noticia._id == idNoticia);
        setNoticiaEditar(eventoEditar);
    }

    function actualizarNoticia(news) {
        Meteor.call('news.save', news, (error, response) => {
            if (error) {
                alert(error.reason);
            } else {
                alert(response.message);
            }
        })
    }

    return (
        <NewsContext.Provider value={{
            noticias: props.noticias,
            agregarNoticia: agregarNoticia,
            obtenerNoticia: obtenerNoticia,
            noticiasEditar: noticiaEditar,
            actualizarNoticia: actualizarNoticia
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export const NewsContextProvider = withNews(NewsProvider);


