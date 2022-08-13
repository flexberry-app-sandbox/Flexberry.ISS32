import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS32FormLForm from './forms/i-i-s-i-s-s32-form-l';
import IISISS32InvestmentLForm from './forms/i-i-s-i-s-s32-investment-l';
import IISISS32SizeLForm from './forms/i-i-s-i-s-s32-size-l';
import IISISS32SupportLForm from './forms/i-i-s-i-s-s32-support-l';
import IISISS32FormEForm from './forms/i-i-s-i-s-s32-form-e';
import IISISS32InvestmentEForm from './forms/i-i-s-i-s-s32-investment-e';
import IISISS32SizeEForm from './forms/i-i-s-i-s-s32-size-e';
import IISISS32SupportEForm from './forms/i-i-s-i-s-s32-support-e';
import IISISS32FormModel from './models/i-i-s-i-s-s32-form';
import IISISS32InvestmentModel from './models/i-i-s-i-s-s32-investment';
import IISISS32ListInvModel from './models/i-i-s-i-s-s32-list-inv';
import IISISS32ListSizeModel from './models/i-i-s-i-s-s32-list-size';
import IISISS32SizeModel from './models/i-i-s-i-s-s32-size';
import IISISS32SupportModel from './models/i-i-s-i-s-s32-support';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s32-form': IISISS32FormModel,
    'i-i-s-i-s-s32-investment': IISISS32InvestmentModel,
    'i-i-s-i-s-s32-list-inv': IISISS32ListInvModel,
    'i-i-s-i-s-s32-list-size': IISISS32ListSizeModel,
    'i-i-s-i-s-s32-size': IISISS32SizeModel,
    'i-i-s-i-s-s32-support': IISISS32SupportModel
  },

  'application-name': 'I s s32',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s32',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s32',
          title: 'I s s32'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s32': {
          caption: 'ISS32',
          title: 'ISS32',
          'i-i-s-i-s-s32-investment-l': {
            caption: 'Investment',
            title: ''
          },
          'i-i-s-i-s-s32-form-l': {
            caption: 'Form',
            title: ''
          },
          'i-i-s-i-s-s32-size-l': {
            caption: 'Size',
            title: ''
          },
          'i-i-s-i-s-s32-support-l': {
            caption: 'Support',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s32-form-l': IISISS32FormLForm,
    'i-i-s-i-s-s32-investment-l': IISISS32InvestmentLForm,
    'i-i-s-i-s-s32-size-l': IISISS32SizeLForm,
    'i-i-s-i-s-s32-support-l': IISISS32SupportLForm,
    'i-i-s-i-s-s32-form-e': IISISS32FormEForm,
    'i-i-s-i-s-s32-investment-e': IISISS32InvestmentEForm,
    'i-i-s-i-s-s32-size-e': IISISS32SizeEForm,
    'i-i-s-i-s-s32-support-e': IISISS32SupportEForm
  },

});

export default translations;
