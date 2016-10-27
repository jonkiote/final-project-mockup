import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.route('/career', {
  name: 'Careers_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Careers_Page' });
  },
});

FlowRouter.route('/calendar', {
  name: 'Calendar_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calendar_Page' });
  },
});

FlowRouter.route('/about-us', {
  name: 'About_Us_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'About_Us_Page' });
  },
});

FlowRouter.route('/my-profile', {
  name: 'My_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'My_Profile_Page' });
  },
});

FlowRouter.route('/leaderboard', {
  name: 'Leaderboard_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Leaderboard_Page' });
  },
});

FlowRouter.route('/public-chat', {
  name: 'Public_Chat_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Public_Chat_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
