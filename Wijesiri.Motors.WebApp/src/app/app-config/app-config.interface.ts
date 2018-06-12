export interface IAppConfig {

  LANGUAGE_DEFAULT: Language;
  LANGUAGES: Language[];
  IMAGE_UPLOAD_LOCATION: string;
  IMAGE_URL: string;
  RESERVED_STATUS: Status;
  IMAGE_NAME_PREFIX: string;
}

interface Language {
  ID: string;
  NAME: string;
}

interface Status {
  code: string;
  description: string;
  color: Color;
}

interface Color {
  code: string;
}

export interface ISericeUrl {

  AUTHENTICATION_SERVICE_URL: string;
}
