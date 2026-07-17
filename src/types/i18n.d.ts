import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: {
        navbar: {
          home: string;
          about: string;
          technologies: string;
          experience: string;
          projects: string;
          contact: string;
        };
        common: {
          language: string;
          backToTop: string;
          available: string;
        };
        home: {
          greeting: string;
          name: string;
          title: string;
          description: string;
          contact: string;
        };
        aboutMe: {
          title: string;
          p1: string;
          p2: string;
          p3: string;
          imageLabel: string;
        };
        sections: {
          experiences: string;
          projects: string;
          technologies: string;
          contact: string;
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
          overview: string;
          situation: string;
          task: string;
          action: string;
          challenge: string;
          result: string;
          learnings: string;
        }>;
        projectModal: {
          eyebrow: string;
          situationCaption: string;
          taskCaption: string;
          actionCaption: string;
          challengePrefix: string;
          resultCaption: string;
          learningsTitle: string;
          liveCta: string;
          githubCta: string;
          caseStudyHint: string;
        };
        technologies: {
          filters: {
            todas: string;
            frontend: string;
            backend: string;
            outros: string;
          };
        };
        contact: {
          title: string;
          description: string;
          email: string;
          whatsapp: string;
          form: {
            name: string;
            namePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            phone: string;
            phonePlaceholder: string;
            subject: string;
            subjectPlaceholder: string;
            submit: string;
            sending: string;
            sent: string;
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
        };
        footer: {
          mediaLabel: string;
        };
      };
    };
  }
}
