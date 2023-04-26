import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

import prisma from '@config/client';

jest.mock('@config/client', () => ({
}));

beforeEach(() => {
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
