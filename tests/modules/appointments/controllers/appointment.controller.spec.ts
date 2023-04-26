import { Response, NextFunction, Request } from 'express';
import sinon from 'sinon';
import * as appointmentService from '@/modules/appointments/services/appointment.service';
import {
  createAppointment,
  deleteAppointment,
  getAppointment,
  getUserCreatedAppointments,
  updateAppointment
} from '@/modules/appointments/controllers/appointment.controller';
import { HttpCode } from '@/common/exceptions/appError';
import { RequestWithUser } from '@/common/interfaces/express.interface';
import { Result } from '@/common/core/Result';

describe('getUserCreatedAppointments', () => {
  let appointmentServiceStub: sinon.SinonStub;
  let reqWithUser: RequestWithUser;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    appointmentServiceStub = sinon.stub(
      appointmentService,
      'getUserCreatedAppointments'
    );
    reqWithUser = {
      user: { id: 'test_user_id' }
    } as unknown as RequestWithUser;
    req = {} as Request;
    res = {
      status: sinon.stub().returns({
        json: sinon.stub()
      })
    } as unknown as Response;
    next = sinon.stub();
  });

  afterEach(() => {
    sinon.restore();
  });

  test('it should return user created appointments successfully', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
});

describe('createAppointment', () => {
  let req: Request;
  let reqWithUser: RequestWithUser;
  let res: Response;
  let next: NextFunction;
  let appointmentServiceStub: sinon.SinonStub;

  beforeEach(() => {
    req = {
      body: {
        title: 'Test Appointment'
      }
    } as Request;

    reqWithUser = {
      user: {
        id: 'user-id-123'
      },
      ...req
    } as unknown as RequestWithUser;

    res = {
      status: sinon.stub().returns({
        json: sinon.stub()
      })
    } as unknown as Response;

    next = sinon.stub() as NextFunction;

    appointmentServiceStub = sinon.stub(
      appointmentService,
      'createAppointment'
    );
  });

  afterEach(() => {
    sinon.restore();
  });

  test('it should return created appointment with appointment dto', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('getAppointment', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      params: { id: '1' },
      user: { id: '123' }
    } as unknown as Request;
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    } as Response;
    next = sinon.stub();
  });

  afterEach(() => {
    sinon.restore();
  });

  test('it should return appointment with valid user id and appointment id', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('deleteAppointment', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;
  let deleteAppointmentStub: sinon.SinonStub;

  beforeEach(() => {
    req = {} as unknown as RequestWithUser;
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    } as Response;
    next = sinon.stub() as NextFunction;
    deleteAppointmentStub = sinon.stub(appointmentService, 'deleteAppointment');
  });

  afterEach(() => {
    sinon.restore();
  });

  test('it should return success when valid id given', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});

describe('updateAppointment', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;
  let updateAppointmentStub: sinon.SinonStub;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis()
    } as unknown as Response;
    next = sinon.stub() as NextFunction;
    updateAppointmentStub = sinon.stub(appointmentService, 'updateAppointment');
  });

  afterEach(() => {
    sinon.restore();
  });

  test('it should return success message when valid appointment id and payload', async () => {
    expect(0).not.toBeLessThanOrEqual(0);
  });
});
