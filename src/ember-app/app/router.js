import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s32-form-l');
  this.route('i-i-s-i-s-s32-form-e',
  { path: 'i-i-s-i-s-s32-form-e/:id' });
  this.route('i-i-s-i-s-s32-form-e.new',
  { path: 'i-i-s-i-s-s32-form-e/new' });
  this.route('i-i-s-i-s-s32-investment-l');
  this.route('i-i-s-i-s-s32-investment-e',
  { path: 'i-i-s-i-s-s32-investment-e/:id' });
  this.route('i-i-s-i-s-s32-investment-e.new',
  { path: 'i-i-s-i-s-s32-investment-e/new' });
  this.route('i-i-s-i-s-s32-size-l');
  this.route('i-i-s-i-s-s32-size-e',
  { path: 'i-i-s-i-s-s32-size-e/:id' });
  this.route('i-i-s-i-s-s32-size-e.new',
  { path: 'i-i-s-i-s-s32-size-e/new' });
  this.route('i-i-s-i-s-s32-support-l');
  this.route('i-i-s-i-s-s32-support-e',
  { path: 'i-i-s-i-s-s32-support-e/:id' });
  this.route('i-i-s-i-s-s32-support-e.new',
  { path: 'i-i-s-i-s-s32-support-e/new' });
});

export default Router;
