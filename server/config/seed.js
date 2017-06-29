/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Configuration from '../api/config/config.model'
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    User.find({}).remove()
      .then(() => {
        User.create({
          provider: 'local',
          name: 'Test User',
          email: 'test@example.com',
          password: 'test'
        }, {
          provider: 'local',
          role: 'admin',
          name: 'Admin',
          email: 'admin@example.com',
          password: 'admin'
        })
        .then(() => console.log('finished populating users'))
        .catch(err => console.log('error populating users', err));
      });

    Configuration.find({}).remove()
      .then(() => {
        Configuration.create({
          name: 'tianheng_config',
          config: {
            a: '123123',
            b: '123123',
          },
          publicConfig: true
        })
          .then(() => console.log('finish populating configurations') )
          .catch(err => console.log('error pupulating configurations', err))
      })
  }
}
