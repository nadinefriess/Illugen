import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  const spy = jasmine.createSpyObj(
    'AppService',
      [
        'readState',
        'returnRendomIndexFromTermList',
        'collectRandomTerms',
        'getRandomTerms',
        'getListByName',
        'getSmallestLengthOfLists',
        'getNumberOfTopics'
      ]
    );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: AppService, useValue: spy}]
    });
    
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
