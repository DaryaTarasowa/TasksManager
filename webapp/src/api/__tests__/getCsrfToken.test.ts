import { getCsrfToken } from '@plans/api/utils';

const cookieWithTokenFixture =
  'trifacta_browser_support=%7B%22Chrome%22%3A%7B%22version%22%3A108%7D%7D; intercom-device-id-s63b93c6=9f329518-56d4-4933-a151-22ba309a5b13; amp_e35282=i8w-2rREJL2zQz_HIHpEKy.YTJmYzZmOTQ4YzU5NWJiYjFiYWU2ZjdmNTVhMjhiZWQ2MmI2ZDNmMQ==..1gn4l37qu.1gn4l3bu4.59.9.5i; amp_dummy=X1gi6zxvgnbrRzM3v16R0c.YTJmYzZmOTQ4YzU5NWJiYjFiYWU2ZjdmNTVhMjhiZWQ2MmI2ZDNmMQ==..1gn7cvgi8.1gn7cvgl4.5b.a.5l; amp_8e844d=_ViFEIG6OzcxpoYiNJzClH.YTJmYzZmOTQ4YzU5NWJiYjFiYWU2ZjdmNTVhMjhiZWQ2MmI2ZDNmMQ==..1gn7cvgio.1gn7cvgl5.2.1.3; intercom-session-s63b93c6=RmtXT0dLRFZ6VnpoWVB6aCtmQzZGNExoOTNHOUpWLzU1Z0NhVmtHaXBWM2JTVGpFbXFPMVltVFFrK2NOeGVWTy0tQTZ6RGJnM0JNZGdLd2RHTHFpTDBVQT09--0f2bf0d4677e25a654ae863397dbea4d9c27cede; x-csrf-token=YIvltQY2-fHu0L0YwSx0sbhqiodOAMeh_r4g';

const cookieWithoutTokenFixture =
  'trifacta_browser_support=%7B%22Chrome%22%3A%7B%22version%22%3A108%7D%7D; intercom-device-id-s63b93c6=9f329518-56d4-4933-a151-22ba309a5b13; amp_e35282=i8w-2rREJL2zQz_HIHpEKy.YTJmYzZmOTQ4YzU5NWJiYjFiYWU2ZjdmNTVhMjhiZWQ2MmI2ZDNmMQ==..1gn4l37qu.1gn4l3bu4.59.9.5i; amp_dummy=X1gi6zxvgnbrRzM3v16R0c.YTJmYzZmOTQ4YzU5NWJiYjFiYWU2ZjdmNTVhMjhiZWQ2MmI2ZDNmMQ==..1gn7cvgi8.1gn7cvgl4.5b.a.5l; amp_8e844d=_ViFEIG6OzcxpoYiNJzClH.YTJmYzZmOTQ4YzU5NWJiYjFiYWU2ZjdmNTVhMjhiZWQ2MmI2ZDNmMQ==..1gn7cvgio.1gn7cvgl5.2.1.3; intercom-session-s63b93c6=RmtXT0dLRFZ6VnpoWVB6aCtmQzZGNExoOTNHOUpWLzU1Z0NhVmtHaXBWM2JTVGpFbXFPMVltVFFrK2NOeGVWTy0tQTZ6RGJnM0JNZGdLd2RHTHFpTDBVQT09--0f2bf0d4677e25a654ae863397dbea4d9c27cede;';

describe('getCsrfToken', () => {
  it('should extract a token from cookie', () => {
    Object.defineProperty(window.document, 'cookie', {
      value: cookieWithTokenFixture,
      writable: true,
    });
    const token = getCsrfToken();
    expect(token).toBe('YIvltQY2-fHu0L0YwSx0sbhqiodOAMeh_r4g');
  });

  it('should return empty string if token is not available', () => {
    Object.defineProperty(window.document, 'cookie', {
      value: cookieWithoutTokenFixture,
      writable: true,
    });
    const token = getCsrfToken();
    expect(token).toBe('');
  });
});
