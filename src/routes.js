import HomeRoute from "./pages/home";
import ReducerRoute from "./pages/reducer";
export default class Routes {
    apply(routeHandler) {
        const routes = [
            ...HomeRoute,
            ...ReducerRoute,
        ];

        routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
            routeHandler.addRoutes(routes);
        });
    }
}
