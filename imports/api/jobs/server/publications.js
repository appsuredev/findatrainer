import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Jobs from '../jobs';

Meteor.publish('jobs.list', () => Jobs.find());
/*
Meteor.publish('jobs.list', () => {
  var jobsQuery  = Jobs.find({"idUser": String(Meteor.userId())}).fetch();

  //var jobsQuery = Meteor.users.find( { _id: idUser}  );

  return jobsQuery;
});
*/

Meteor.publish('jobs.list.user', (idUser) => {
  check(idUser, String);
  var usersQuery = Meteor.users.find( { _id: idUser}  );

  return usersQuery;
});


Meteor.publish('jobs.list.area', (skipCount, _id, area) => {

  check(area, String);
  check(skipCount, Number);
  check(_id, Number);

  const query = {
    $and: [
      {
        state: area.toUpperCase()
      },
    ],
  };
  // query, projection
  const jobsTotal = Jobs.find().count();
  var jobsQuery = Jobs.find(
    query,
    {
      limit: 10,
      skip: skipCount,
    }
  );

  return jobsQuery;

});


Meteor.publish('jobs.edit', () => Jobs.find());
Meteor.publish('jobs.edit.experience', () => Jobs.find());
Meteor.publish('jobs.list.education', () => Jobs.find());
Meteor.publish('jobs.list.employment', () => Jobs.find());
Meteor.publish('jobs.view', (_id) => {
  check(_id, String);
  return Jobs.find(_id);
});
