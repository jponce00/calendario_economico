import React from 'react';
import { createContext, useState, useEffect } from "react";
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

    function agregarNoticia(news) {
        Meteor.call('news.save', news, (error, response) => {
			if (error) {
				alert(error.reason);
			} else {
				alert(response.message);
			}
		});
    }

    return (
        <NewsContext.Provider value={{
            noticias: props.noticias,
            agregarNoticia: agregarNoticia,            
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export const NewsContextProvider = withNews(NewsProvider);


