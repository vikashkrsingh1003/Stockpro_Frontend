export const authInterceptor = (req, next) => {
    const token = localStorage.getItem("token");
    if (!token)
        return next(req);
    return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
};
//# sourceMappingURL=auth.interceptor.js.map