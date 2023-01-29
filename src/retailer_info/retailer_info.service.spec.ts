import { Test, TestingModule } from '@nestjs/testing';
import { RetailerInfoService } from './retailer_info.service';

describe('RetailerInfoService', () => {
  let service: RetailerInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetailerInfoService],
    }).compile();

    service = module.get<RetailerInfoService>(RetailerInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
