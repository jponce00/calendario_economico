import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Layout } from '/imports/ui/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

Meteor.startup(() => {
  render(<Layout/>, document.getElementById('react-target'));
});
