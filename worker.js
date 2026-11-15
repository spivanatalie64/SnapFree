const PAGES_URL = 'https://snapfree.pages.dev';
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/SnapFree') || url.pathname.startsWith('/snapfree')) {
      const target = new URL(PAGES_URL);
      target.pathname = url.pathname.replace(/^\/[Ss]nap[Ff]ree/, '') || '/';
      target.search = url.search;
      return fetch(new Request(target, request));
    }
    const target = new URL(PAGES_URL);
    target.pathname = url.pathname;
    target.search = url.search;
    return fetch(new Request(target, request));
  }
};
