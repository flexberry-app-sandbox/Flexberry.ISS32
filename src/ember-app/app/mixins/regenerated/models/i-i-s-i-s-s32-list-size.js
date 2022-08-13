import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  size: DS.belongsTo('i-i-s-i-s-s32-size', { inverse: null, async: false }),
  support: DS.belongsTo('i-i-s-i-s-s32-support', { inverse: 'listSize', async: false })
});

export let ValidationRules = {
  size: {
    descriptionKey: 'models.i-i-s-i-s-s32-list-size.validations.size.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  support: {
    descriptionKey: 'models.i-i-s-i-s-s32-list-size.validations.support.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ListSizeE', 'i-i-s-i-s-s32-list-size', {
    
  });
};
