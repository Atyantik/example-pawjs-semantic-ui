import HomeRoute from "./pages/home";
export default class Routes {
    apply(routeHandler) {
        const routes = [
            ...HomeRoute,
        ];

        routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
            routeHandler.addRoutes(routes);
        });
    }
}
