import sinon from 'sinon';
import * as AppointmentRepository from '@/modules/appointments/repository/appointment.repository';
import {
  createAppointment,
  deleteAppointment,
  getAppointment,
  getUserCreatedAppointments,
  updateAppointment
} from '@/modules/appointments/services/appointment.service';
import { Prisma } from '@prisma/client';
import { AppError } from '@/common/exceptions/appError';
import * as DateUtils from '@/utils/date';

describe('createAppointment', () => {
  afterEach(() => {
    sinon.restore();
  });

  test('it should return appointment object with the correct payload', async () => {
    // arrange
    const payload = {
      date: new Date('2021-04-07T10:00:00.000Z'),
      appointmentFor: 'Jane Doe'
    };

    const expectedPayload = {
      ...payload,
      date: new Date(payload.date)
    };
    const createAppointmentStub = sinon
      .stub(AppointmentRepository, 'createAppointment')
      .resolves(expectedPayload);

    // act
    await createAppointment(payload);

    // assert
    sinon.assert.calledOnce(createAppointmentStub);
    sinon.assert.calledWith(createAppointmentStub, expectedPayload);
  });

  test('it should throw an error when appointment creation fails', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('getUserCreatedAppointments', () => {
  afterEach(() => {
    sinon.restore();
  });

  test('it should return the user created appointments with correct payload', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should throw error with for non-existing appointment', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('getAppointment', () => {
  afterEach(() => {
    sinon.restore();
  });

  test('it should return the appointment if it exists and belongs to the user', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should throw notFound if the appointment does not exist', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should throw notFound if the appointment does not belong to the user', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should throw the error thrown by AppointmentRepository.getAppointmentById', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('updateAppointment', () => {
  afterEach(() => {
    sinon.restore();
  });

  test('it should return updated appointment with the correct payload', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should throw an error when appointment does not exist', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should throw an error when appointment date is in the past', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should throw an error when updating the appointment fails', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('deleteAppointment', () => {
  const appointmentId = '123';
  const userId = '456';

  afterEach(() => {
    sinon.restore();
  });

  test('it should return  successful message', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });

  test('it should throw a bad request error when appointment with given id is not available', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });


  test('it should throw an error when deleting the appointment fails', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});
