export interface ProjectCaseStudy {
  situation: string;
  task: string;
  action: string;
  challenge: string;
  result: string;
  learnings: string;
}

export interface ProjectContent {
  id: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectTranslation extends ProjectCaseStudy {
  id: string;
  title: string;
  description: string;
  overview: string;
}

export interface Project extends ProjectContent, ProjectTranslation {}
