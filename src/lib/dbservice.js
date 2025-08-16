import prisma from '@/lib/prisma';

// Database service functions
export const dbService = {
  // Link operations
  link: {
    prnExists: async (prn) => {
      const link = await prisma.link.findFirst({
        where: { prn }
      });
      return !!link;
    },
    
    createLinkRecord: async (userId, prn) => {
      return await prisma.link.create({
        data: {
          userId,
          prn,
          linkedAt: new Date(),
        }
      });
    },

    findByUserId: async (userId) => {
      return await prisma.link.findFirst({
        where: { userId }
      });
    },

    findByPrn: async (prn) => {
      return await prisma.link.findFirst({
        where: { prn }
      });
    }
  },

  // Student operations
  student: {
    createOrUpdateStudentRecord: async (studentData) => {
      return await prisma.student.upsert({
        where: { prn: studentData.prn },
        update: {
          branchFull: studentData.branch.full,
          branchShort: studentData.branch.short,
          year: studentData.year,
          campusCode: studentData.campus.code,
          campusShort: studentData.campus.short,
        },
        create: {
          prn: studentData.prn,
          branchFull: studentData.branch.full,
          branchShort: studentData.branch.short,
          year: studentData.year,
          campusCode: studentData.campus.code,
          campusShort: studentData.campus.short,
        }
      });
    },

    findByPrn: async (prn) => {
      return await prisma.student.findUnique({
        where: { prn }
      });
    },

    findByBranch: async (branchShort) => {
      return await prisma.student.findMany({
        where: { branchShort }
      });
    }
  },

  // AnonBan operations
  anonBan: {
    findActiveByUserId: async (userId) => {
      return await prisma.anonBan.findFirst({
        where: {
          userId,
          active: true
        }
      });
    },

    create: async (data) => {
      return await prisma.anonBan.create({
        data
      });
    },

    deactivate: async (id) => {
      return await prisma.anonBan.update({
        where: { id },
        data: { active: false }
      });
    }
  }
};