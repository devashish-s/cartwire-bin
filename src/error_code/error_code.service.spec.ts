import { Test, TestingModule } from '@nestjs/testing';
import { ErrorCodeService } from './error_code.service';

describe('ErrorCodeService', () => {
  let service: ErrorCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorCodeService],
    }).compile();

    service = module.get<ErrorCodeService>(ErrorCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
