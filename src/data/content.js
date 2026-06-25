import resume from "./resume.json";
import projects from "./projects.json";

export function getResume() {
  return resume;
}

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByTechnology(technology) {
  return projects.filter((project) =>
    project.technologies.some(
      (item) => item.toLowerCase() === technology.toLowerCase()
    )
  );
}

export function getProjectsByStatus(status) {
  return projects.filter(
    (project) => project.status.toLowerCase() === status.toLowerCase()
  );
}