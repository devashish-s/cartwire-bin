import { Test, TestingModule } from '@nestjs/testing';
import { RetailerInfoController } from './retailer_info.controller';
import { RetailerInfoService } from './retailer_info.service';

describe('RetailerInfoController', () => {
  let controller: RetailerInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetailerInfoController],
      providers: [RetailerInfoService],
    }).compile();

    controller = module.get<RetailerInfoController>(RetailerInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
