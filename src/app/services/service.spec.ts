import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AppService } from './service';

describe('AppService', () => {
  let service: AppService;
  let appServiceSpy: jasmine.SpyObj<AppService>;
  const spy = jasmine.createSpyObj(
        'AppService',
          [
            'returnRendomIndexFromTermList',
            'collectRandomTerms',
            'checkSmallestLength',
            'getRandomTerms',
            'getSmallestLengthOfLists',
            'getSettingValueByName',
            'getNumberOfTopics'
          ],[
            'categoryList$',
            'topicList$',
            'settings$'
          ]
        );

  beforeEach(() => { 
    TestBed.configureTestingModule({
      providers: [
        AppService,
        {provide: AppService, useValue: spy}]
    })
    service = TestBed.inject(AppService);
    appServiceSpy = TestBed.inject(AppService) as jasmine.SpyObj<AppService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('#categoryList$ should contain a list of categories type Category[]',
  //   (done: DoneFn) => {
  //     appServiceSpy.categoryList$.pipe(map(categories => [{category:'Testcategory',
  //       terms: ['Testterm']}]));
  //     service.categoryList$.subscribe(value => {
  //     expect(value).toBe([{category:'Testcategory',
  //     terms: ['Testterm']}]);
  //     done();
  //   });
  // });

  it('#getNumberOfTopics should return number of Topics from observable',
    (done: DoneFn) => {
      appServiceSpy.getNumberOfTopics.and.returnValue(of(1))
      service.getNumberOfTopics().subscribe(value => {
      expect(value).toBe(1);
      done();
    });
  });

  it('#getSettingValueByName should return value of a setting from observable',
    (done: DoneFn) => {
      appServiceSpy.getSettingValueByName.and.returnValue(of(1))
      service.getSettingValueByName('termsPerCategory').subscribe(value => {
      expect(value).toBe(1);
      done();
    });
  });

  // it('#getSmallestLengthOfLists should return value of a setting from observable',
  //   (done: DoneFn) => {
  //     appServiceSpy.getSmallestLengthOfLists.and.returnValue(of(5))
  //     service.getSmallestLengthOfLists('termsPerCategory').subscribe(value => {
  //     expect(value).toBe(5);
  //     done();
  //   });
  // });

  
  
});
