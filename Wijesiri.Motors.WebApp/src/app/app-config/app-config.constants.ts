import { InjectionToken } from '@angular/core';
import { IAppConfig } from './app-config.interface';

export const APP_DI_CONFIG: IAppConfig = {

  LANGUAGE_DEFAULT: { ID: 'en', NAME: 'English' },
  LANGUAGES: [
    { ID: 'en', NAME: 'English' },
    { ID: 'zh', NAME: '	Chinese' },
    { ID: 'fr', NAME: '	French' }
  ],
  IMAGE_UPLOAD_LOCATION: ' ',
  IMAGE_URL: 'http://localhost:4200/',
  // IMAGE_URL: 'http://52.230.10.181:5003/uploadFile-',
  RESERVED_STATUS: {
        code: 'RSV',
        description: 'Reserved',
        color: { code: '#99699e' }
  },
  IMAGE_NAME_PREFIX : 'uploadFile'

};

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

