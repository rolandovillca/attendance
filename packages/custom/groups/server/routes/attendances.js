'use strict';

var controller = require('../controllers/attendances');

module.exports = function(Days, app, auth, database) {
  var path = '/groups/:groupId/schedules/:scheduleId/attendance/';
  app.get(path, controller.all);
  app.post(path, controller.create);
  app.put(path + ':attendanceId', controller.update);
  app.delete(path + ':attendanceId', controller.destroy);
  app.get(path + ':attendanceId', controller.show);
  app.param('attendanceId', controller.attendance);
  app.param('scheduleId', controller.schedule);
  app.param('groupId', controller.group);
};
