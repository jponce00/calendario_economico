import React from 'react';
import { Data } from './Data.jsx';
import {withTracker} from 'meteor/react-meteor-data';

import {News} from '../api/Noticias/Noticia';

function App({noticias}) {
	return (
		<div>		
			
			<Data noticias={noticias} />

		</div>
	);
}

export default withTracker(() => {
	Meteor.subscribe('news.list');
	return {
		noticias: News.find({
		}).fetch()
	}
})(App);