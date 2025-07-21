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
        home: {
          greeting: string;
          name: string;
          title: string;
          contact: string;
        };
        aboutMe: {
          title: string;
          p1: string;
          p2: string;
          p3: string;
        };
        experiences: Array<{
          id: string;
          title: string;
          period: string;
          description: string;
          location: string;
        }>;
        projects: Array<{
          id: string;
          title: string;
          description: string;
          technologies: string;
          image: string;
          liveUrl?: string;
          githubUrl?: string;
        }>;
        contact: {
          title: string;
          description: string;
          form: {
            name: string;
            namePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            subject: string;
            subjectPlaceholder: string;
            submit: string;
            sending: string;
          };
          validation: {
            nameRequired: string;
            emailRequired: string;
            emailInvalid: string;
            subjectRequired: string;
          };
          messages: {
            success: string;
            error: string;
          };
          sections: {
            technologies: string;
            experiences: string; 
          }
        };
      };
    };
  }
}
