import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../../ui/components/App';
import { NewsContextProvider } from '/imports/ui/context/newsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

Meteor.startup(() => {	
	render(
	<React.StrictMode>
		<NewsContextProvider>
			<App/>
		</NewsContextProvider>
	</React.StrictMode>, 
	document.getElementById('react-target'));
});