import Student from "../models/students.js";
import Project from "../models/projects.js";

import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

// Student Type
const StudentType = new GraphQLObjectType({
  name: "Student",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLString) },
    mobileNumber: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    subject: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

// Project Type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(GraphQLString) },
    subject: { type: new GraphQLNonNull(GraphQLString) },
    student: {
      type: StudentType,
      resolve(parent, args) {
        return Student.findById(parent.studentId);
      },
    },
  }),
});

// Root Queries
const RootQueries = new GraphQLObjectType({
  name: "RootQueries",
  fields: {
    students: {
      type: new GraphQLList(StudentType),
      resolve(parent, args) {
        return Student.find();
      }
    },
    student: {
      type: StudentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Student.findById(args.id);
      }
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      }
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      }
    },
  }
});

// mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // addStudent
    addStudent: {
      type: StudentType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLString) },
        mobileNumber: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        subject: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const existingEmail = await Student.findOne({ email: args.email });
        const existingPhone = await Student.findOne({ mobileNumber: args.mobileNumber });

        if (existingEmail) {
          throw new Error('Email already exists');
        }
        else if(existingPhone) {
          throw new Error('Phone Number already exists');
        }
        else {
          const newStudent = new Student({
            name: args.name,
            age: args.age,
            mobileNumber: args.mobileNumber,
            email: args.email,
            subject: args.subject
          });
          return await newStudent.save();
        }
      }
    },
    addProject: {
      type: ProjectType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: new GraphQLNonNull(GraphQLString) },
        studentId: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        const project = new Project({
          title: args.title,
          description: args.description,
          status: args.status,
          studentId: args.studentId,
        });

        return await project.save();
      },
    },
    updateStudent: {
      type: StudentType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLString) },
        mobileNumber: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        subject: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const existingEmail = await Student.findOne({ email: args.email });
        const existingPhone = await Student.findOne({ mobileNumber: args.mobileNumber });

        if (existingEmail) {
          throw new Error('Email already exists');
        }
        else if(existingPhone) {
          throw new Error('Phone Number already exists');
        }
        else {
          return await Student.findByIdAndUpdate(
            args.id,
            {
              $set: {
                name: args.name,
                age: args.age,
                mobileNumber: args.mobileNumber,
                email: args.email,
                subject: args.subject
              }
            },
            { new: true }
          );
        }
      }
    },
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: new GraphQLNonNull(GraphQLString) },
        studentId: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        return await Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              description: args.description,
              status: args.status,
              studentId: args.studentId,
            }
          },
          { new: true }
        );
      }
    },
    deleteStudent: {
      type: StudentType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        return await Student.findByIdAndDelete(args.id);
      }
    },
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        return await Project.findByIdAndDelete(args.id);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQueries,
  mutation,
});

export default schema;