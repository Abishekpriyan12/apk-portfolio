// server/src/schema/typeDefs.js
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  enum Category {
    WEB_DEV
    DIGITAL_MEDIA
    VIDEOGRAPHY
  }

  type SocialLink {
    platform: String!
    url:      String!
  }

  type Education {
    dateRange:   String!
    title:       String!
    description: String
    institution: String!
  }
  input EducationInput {
    dateRange:   String!
    title:       String!
    description: String
    institution: String!
  }

  type Experience {
    dateRange:  String!
    role:       String!
    company:    String!
    companyUrl: String
    logo:       String
    location:   String
    summary:    String
    bullets:    [String!]!
    techStack:  [String!]!
  }
  input ExperienceInput {
    dateRange:   String!
    company:     String!
    role:        String!
    description: String
  }

  type Certification {
    title:     String!
    authority: String!
    year:      Int!
  }
  input CertificationInput {
    title:     String!
    authority: String!
    year:      Int!
  }

  type Profile {
    _id:             ID!
    firstName:       String!
    lastName:        String!
    tagline:         String
    resumeUrl:       String
    socialLinks:     [SocialLink!]!
    education:       [Education!]!
    experience:      [Experience!]!
    certifications:  [Certification!]!
    projects:        [Project!]!
  }

  type Project {
    title:        String!
    tagline:      String
    description:  String
    category:     Category!
    imageUrl:     String
    projectUrl:   String
    videoUrl:     String
    features:     [String!]!
    technologies: [String!]!
  }

  type Query {
    getProfile: Profile
    getProjects(category: Category): [Project!]!
  }

  type Mutation {
    createProfile(
      firstName:      String!
      lastName:       String!
      tagline:        String
      resumeUrl:      String
      socialLinks:    [SocialLinkInput!]
      education:      [EducationInput!]
      experience:     [ExperienceInput!]
      certifications: [CertificationInput!]
    ): Profile


    updateProfile(
      _id:            ID!
      firstName:      String
      lastName:       String
      tagline:        String
      resumeUrl:      String
      socialLinks:    [SocialLinkInput!]
      education:      [EducationInput!]
      experience:     [ExperienceInput!]
      certifications: [CertificationInput!]
    ): Profile

    createProject(input: CreateProjectInput!): Project
    updateProject(_id: ID!, input: UpdateProjectInput!): Project

    sendMessage(name: String!, email: String!, message: String!): Boolean!
  }

  

  input SocialLinkInput {
    platform: String!
    url:      String!
  }

  input CreateProjectInput {
    title:        String!
    tagline:      String
    description:  String
    category:     Category!
    imageUrl:     String
    projectUrl:   String
    videoUrl:     String
    features:     [String!]!
    technologies: [String!]!
  }

  input UpdateProjectInput {
    title:        String
    tagline:      String
    description:  String
    category:     Category
    imageUrl:     String
    projectUrl:   String
    videoUrl:     String
    features:     [String!]
    technologies: [String!]
  }
`;

export default typeDefs;
