import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { RyeClient } from '../ryeClient';
import { INVALID_AUTH_HEADER_MESSAGE } from '../utils';

const spy = vitest.spyOn(process, 'emitWarning');

function expectNoWarning() {
  expect(spy).not.toHaveBeenCalledWith(expect.any(String), 'Rye');
}

function expectWarning(message: string) {
  expect(spy).toHaveBeenCalledWith(message, 'Rye');
}

beforeEach(() => {
  vitest.clearAllMocks();
});

describe('RyeClient', () => {
  describe('warns on invalid auth header', () => {
    it('not a header', () => {
      // const spy = vitest.spyOn(process, 'emitWarning');

      new RyeClient({
        authHeader: 'not-a-header',
        shopperIp: '127.0.0.1',
      });

      expectWarning(INVALID_AUTH_HEADER_MESSAGE);
    });

    it('malformed auth header', () => {
      new RyeClient({
        authHeader: 'Bearer xxx ',
        shopperIp: '127.0.0.1',
      });

      expectWarning(INVALID_AUTH_HEADER_MESSAGE);
    });

    it('invalid auth scheme', () => {
      new RyeClient({
        authHeader: 'Server xxx',
        shopperIp: '127.0.0.1',
      });

      expectWarning(INVALID_AUTH_HEADER_MESSAGE);
    });

    it.each(['Basic', 'Bearer'])('valid %s auth header', (authType) => {
      new RyeClient({
        authHeader: `${authType} xxx`,
        shopperIp: '127.0.0.1',
      });

      expectNoWarning();
    });
  });
});
