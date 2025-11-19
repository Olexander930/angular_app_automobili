import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const baseUrl = 'http://localhost:3000';
  const apiReq = req.url.startsWith('http')
    ? req
    : req.clone({
      url: baseUrl + req.url
    });

  return next(apiReq);
};
