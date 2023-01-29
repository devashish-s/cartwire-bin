import { Test, TestingModule } from '@nestjs/testing';
import { ErrorCodeController } from './error_code.controller';
import { ErrorCodeService } from './error_code.service';

describe('ErrorCodeController', () => {
  let controller: ErrorCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErrorCodeController],
      providers: [ErrorCodeService],
    }).compile();

    controller = module.get<ErrorCodeController>(ErrorCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
