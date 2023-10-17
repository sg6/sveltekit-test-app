// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = false;
export const trailingSlash = 'always';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function load({ url }) {
    return {
      url: url.pathname,
    }
  }