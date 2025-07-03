import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: {
        navbar: {
          home: string;
          about: string;
          projects: string;
          contact: string;
        };
        common: {
          language: string;
        };
      };
    };
  }
}
