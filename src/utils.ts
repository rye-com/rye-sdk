export const INVALID_AUTH_HEADER_MESSAGE =
  'You have provided an invalid Authorization header. The Rye SDK expects a complete header value such as "Basic XXX". API calls will silently fail and return `undefined` until a valid header is provided. In future versions of the SDK, this will throw an error.';

export function warnIfAuthHeaderInvalid(authHeader: string): void {
  if (!authHeader.includes(' ') || authHeader.lastIndexOf(' ') !== authHeader.indexOf(' ')) {
    warn(INVALID_AUTH_HEADER_MESSAGE);
    return;
  }

  const [authType] = authHeader.split(' ');
  if (!['basic', 'bearer'].includes(authType.toLowerCase())) {
    warn(INVALID_AUTH_HEADER_MESSAGE);
    return;
  }
}

export function warn(message: string): void {
  if (typeof process !== 'undefined' && !!process && typeof process.emitWarning === 'function') {
    process.emitWarning(message, 'Rye');
    return;
  }

  console.warn(`Rye: ${message}`);
}
