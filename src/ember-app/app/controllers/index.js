import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s32.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s32.title'),
          children: [{
            link: 'i-i-s-i-s-s32-investment-l',
            caption: i18n.t('forms.application.sitemap.i-s-s32.i-i-s-i-s-s32-investment-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s32.i-i-s-i-s-s32-investment-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-i-s-s32-form-l',
            caption: i18n.t('forms.application.sitemap.i-s-s32.i-i-s-i-s-s32-form-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s32.i-i-s-i-s-s32-form-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-i-s-s32-size-l',
            caption: i18n.t('forms.application.sitemap.i-s-s32.i-i-s-i-s-s32-size-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s32.i-i-s-i-s-s32-size-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-i-s-s32-support-l',
            caption: i18n.t('forms.application.sitemap.i-s-s32.i-i-s-i-s-s32-support-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s32.i-i-s-i-s-s32-support-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})