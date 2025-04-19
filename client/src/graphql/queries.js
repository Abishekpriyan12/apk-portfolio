// src/graphql/queries.js
import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query {
    getProfile {
      firstName
      lastName
      tagline
      resumeUrl
      socialLinks {
        platform
        url
      }
      education {
        dateRange
        title
        description
        institution
      }
      experience {
        dateRange
        role
        company
        companyUrl
        logo
        location
        summary
        bullets
        techStack
      }
      certifications {
        title
        authority
        year
      }
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects {
    getProfile {
      projects {
        title
        tagline
        description
        imageUrl
        projectUrl
        videoUrl
        features
        technologies
      }
    }
  }
`;