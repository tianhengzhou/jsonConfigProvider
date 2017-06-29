'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './config.events';

let ConfigSchema = new mongoose.Schema({
  name: String,
  config: Object,
  publicConfig: Boolean
});

registerEvents(ConfigSchema);
export default mongoose.model('Config', ConfigSchema);
