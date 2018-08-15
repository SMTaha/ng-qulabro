import { OnboardingBodyModule } from './onboarding-body.module';

describe('OnboardingBodyModule', () => {
  let onboardingBodyModule: OnboardingBodyModule;

  beforeEach(() => {
    onboardingBodyModule = new OnboardingBodyModule();
  });

  it('should create an instance', () => {
    expect(onboardingBodyModule).toBeTruthy();
  });
});
