import { prismaMock } from '@tests/prismaTestSetup';
import { Appointment, Prisma } from '@prisma/client';
import {
  createAppointment,
  deleteAppointmentById,
  getAppointmentById,
  getAppointmentForUserId,
  getAppointmentsByUserId,
  updateAppointmentById
} from '@modules/appointments/repository/appointment.repository';

describe('createAppointment', () => {
  const mockAppointmentData: Prisma.AppointmentUncheckedCreateInput = {
    title: 'Hello',
    date: new Date(),
    appointmentBy: '1',
    appointmentFor: '1'
  };

  //@ts-ignore
  const appointmentMockCreate = prismaMock.appointment.create;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('it should return created appointment with the valid appointment payload', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});
describe('updateAppointment', () => {
  const mockAppointmentData: Prisma.AppointmentUncheckedCreateInput = {
    title: 'Hello',
    date: new Date(),
    appointmentBy: '1',
    appointmentFor: '1'
  };

  //@ts-ignore
  const appointmentMockUpdateMany = prismaMock.appointment.updateMany;

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('it should return updated appointment count', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('findById', () => {
  const mockAppointment: Prisma.AppointmentUncheckedCreateInput = {
    id: '1',
    title: 'Hello',
    date: new Date(),
    appointmentBy: '1',
    appointmentFor: '1'
  };

  //@ts-ignore
  const mockFindUnique = prismaMock.appointment.findUnique;

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('it should return appointment with given id, if the payload is correct', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should return null for non-existing appoints', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('getAppointmentByUserId', () => {
  const mockAppointment: Prisma.AppointmentUncheckedCreateInput = {
    id: '1',
    title: 'Hello',
    date: new Date(),
    appointmentBy: '1',
    appointmentFor: '1'
  };

  //@ts-ignore
  const mockFindMany = prismaMock.appointment.findMany;

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('it should return array of appointments when correct payload is provided ', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});
describe('getAppointmentById', () => {
  //@ts-ignore
  const mockFindMany = prismaMock.appointment.findMany;

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('it should return list of appointments when the correct arguments provided', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('deleteAppointmentById', () => {
  //@ts-ignore
  const mockDeleteMany = prismaMock.appointment.deleteMany;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('it should return deleted appointment count when the correct arguments provided', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should return the count of deleted appointments', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should return null if no appointment was deleted', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});
