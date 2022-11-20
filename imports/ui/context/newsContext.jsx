import React from 'react';
import { createContext, useState, useEffect, useLayoutEffect } from "react";
import {withTracker} from 'meteor/react-meteor-data';

import {News} from '../../api/Noticias/Noticia';

export const NewsContext = createContext({});

// Obtener los datos de la base de datos de forma reactiva:
export const withNews = withTracker(() => {
    Meteor.subscribe('news.list');
	return {
		noticias: News.find({}, {
			sort: {hour:1, minutes:1}
		}).fetch(),
        currentUser: Meteor.user()
	}
})

function NewsProvider(props) {
    // Variable de estado para almacenar los datos de la noticia a editar:
    const [noticiaEditar, setNoticiaEditar] = useState([]);

    // Funcion para agregar noticias:
    function agregarNoticia(news) {
        Meteor.call('news.save', news, (error, response) => {
			if (error) {
				alert(error.reason);
			} else {
				alert(response.message);
			}
		});
    }

    // Funcion para obtener una noticia por su id:
    function obtenerNoticia(idNoticia) {
        let eventoEditar = props.noticias.filter(noticia => noticia._id == idNoticia);
        setNoticiaEditar(eventoEditar);
    }

    // Funcion para actualizar una noticia:
    function actualizarNoticia(news) {
        Meteor.call('news.save', news, (error, response) => {
            if (error) {
                alert(error.reason);
            } else {
                alert(response.message);
            }
        })
    }

    // Funcion para eliminar una noticia:
    function eliminarNoticia(idNoticia) {
        Meteor.call('news.delete', idNoticia, (error, response) => {
            if (error) {
                alert(error.reason);
            } else {
                alert(response.message);
            }
        });
    }

    return (
        <NewsContext.Provider value={{
            currentUser: props.currentUser,
            noticias: props.noticias,
            agregarNoticia: agregarNoticia,
            obtenerNoticia: obtenerNoticia,
            noticiasEditar: noticiaEditar,
            actualizarNoticia: actualizarNoticia,
            eliminarNoticia: eliminarNoticia
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

// Pasamos los datos del withTracker al NewsProvider:
export const NewsContextProvider = withNews(NewsProvider);


