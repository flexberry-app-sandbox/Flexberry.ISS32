import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  form: DS.belongsTo('i-i-s-i-s-s32-form', { inverse: null, async: false }),
  listInv: DS.hasMany('i-i-s-i-s-s32-list-inv', { inverse: 'support', async: false }),
  listSize: DS.hasMany('i-i-s-i-s-s32-list-size', { inverse: 'support', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-i-s-s32-support.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-i-s-s32-support.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  form: {
    descriptionKey: 'models.i-i-s-i-s-s32-support.validations.form.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  listInv: {
    descriptionKey: 'models.i-i-s-i-s-s32-support.validations.listInv.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  listSize: {
    descriptionKey: 'models.i-i-s-i-s-s32-support.validations.listSize.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SupportE', 'i-i-s-i-s-s32-support', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 })
  });

  modelClass.defineProjection('SupportL', 'i-i-s-i-s-s32-support', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 })
  });
};
