const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const User = {
    id: (parent: any, args: any, context: any, info: any) => parent.id,
    email: (parent: any) => parent.email,
    name: (parent: any) => parent.name,
    adress: (parent: any) => parent.adress,
    workRole: (parent: any) => parent.workRole,
    password: (parent: any) => parent.password,
    sales: (parent: any) => parent.sales,
    buying: (parent: any) => parent.buying,
  },
  Sale = {
    id: (parent: any, args: any, context: any, info: any) => parent.id,
    worker: (parent: any) => parent.worker,
    buyer: (parent: any) => parent.buyer,
    projectName: (parent: any) => parent.projectName,
    projectDescription: (parent: any) => parent.projectDescription,
    startDate: (parent: any) => parent.startDate,
    weeks: (parent: any) => parent.weeks,
    budget: (parent: any) => parent.budget,
    saler: (parent: any) => parent.saler,
    status: (parent: any) => parent.status,
  },
  CalendarTask = {
    id: (parent: any, args: any, context: any, info: any) => parent.id,
    text: (parent: any, args: any, context: any) => parent.text,
    startDate: (parent: any, args: any, context: any) => parent.startDate,
    long: (parent: any, args: any, context: any) => parent.long,
  },
  Query = {
    allUsers: (parent: any, args: any) => {
      return prisma.user
        .findMany({
          include: {
            sales: true,
          },
        })
        .then(function (response: any) {
          return response;
        });
    },
    user: (parent: any, args: any) => {
      return prisma.user
        .findFirst({
          where: { email: args.email, password: args.password },
        })
        .then(function (response: any) {
          return response;
        })
        .catch(function (error: any) {
          return error;
        });
    },
    userById: (parent: any, args: any) => {
      return prisma.user
        .findFirst({
          where: { id:args.id },
        })
        .then(function (response: any) {
          return response;
        })
        .catch(function (error: any) {
          return error;
        });
    },
    userSales: (parent: any, args: any) => {
      return prisma.sale
        .findMany({
          where: { salerId: args.salerId },
          include:{buyer:true}
        })
        .then(function (response: any) {
          return response;
        });
    },
    oneSale: (parent: any, args: any) => {
      return prisma.sale
        .findFirst({
          where: { salerId: args.salerId, id: args.id },
        })
        .then(function (response: any) {
          return response;
        });
    },
    userTasks: (parent: any, args: any) => {
      return prisma.calendarTask
        .findMany({
          where: { userId: args.userId },
        })
        .then(function (response: any) {
          return response;
        });
    },
  },
  Mutation = {
    registerUser: (parent: any, args: any) => {
      return prisma.user
        .create({
          data: {
            email: args.email,
            name: args.name,
            password: args.password,
          },
        })
        .then(function (response: any) {
          return response;
        })
        .catch(function (error: any) {
          return error;
        });
    },
    createSale: (parent: any, args: any) => {
      return prisma.sale
        .create({
          data: {
            worker: args.worker,
            projectName: args.projectName,
            projectDescription: args.projectDescription,
            startDate: args.startDate,
            weeks: args.weeks,
            saler: args.salerId && {
              connect: { id: args.salerId },
            },
            buyer: args.buyerId && {
              connect: { id: args.buyerId },
            },
            budget: args.budget,
            status: args.status,
          },
        })
        .then(function (response: any) {
          return response;
        })
        .catch(function (error: any) {
          return error;
        });
    },
    createTask: (parent: any, args: any) => {
      return prisma.calendarTask
        .create({
          data: {
            text: args.text,
            startDate: args.startDate,
            long: args.long,
            user: args.userId && {
              connect: { id: args.userId },
            },
          },
        })
        .then(function (response: any) {
          return response;
        })
        .catch(function (error: any) {
          return error;
        });
    },
    updateSale: (parent: any, args: any) => {
      return prisma.sale
        .update({
          data: {
            worker: args.worker,
            projectName: args.projectName,
            projectDescription: args.projectDescription,
            startDate: new Date(),
            weeks: args.weeks,
            saler: args.salerId && {
              connect: { id: args.salerId },
            },
            buyer: args.buyerId && {
              connect: { id: args.buyerId },
            },
            budget: args.budget,
            status: args?.status,
          },
          where: { id: args.id },
        })
        .then(function (response: any) {
          return response;
        })
        .catch(function (error: any) {
          return error;
        });
    },
    updateTask: (parent: any, args: any) => {
      return prisma.calendarTask
        .update({
          data: {
            text: args.text,
            startDate: args.startDate,
            long: args.long,
            user: args.userId && {
              connect: { id: args.userId },
            },
          },
          where: { id: args.id },
        })
        .then(function (response: any) {
          return response;
        })
        .catch(function (error: any) {
          return error;
        });
    },
  };

export const resolvers = { User, CalendarTask, Sale, Query, Mutation };
