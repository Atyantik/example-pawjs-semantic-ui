import ReduxServer from "@pawjs/redux/server";
import * as AppReducers from "./app/reducers";

const AppInitialState = {
    counter: {
        count: 5,
    },
};


export default class Server {
    constructor({ addPlugin }) {
        const reduxServer = new ReduxServer({ addPlugin });
        reduxServer.setReducers(AppReducers);
        // If you want to add some redux middleware
        // reduxServer.addMiddleware(AnyMiddleware);

        // If you want to add some redux enahncers
        // reduxServer.addEnhancer(SomeEnhancer);
        addPlugin(reduxServer);

        // ...
    }

    apply(serverHandler) {
        serverHandler
            .hooks
            .reduxInitialState
            .tapPromise("AppInitialState", async ({ getInitialState, setInitialState }) => {
                const initialState = Object.assign({}, getInitialState(), AppInitialState);
                // You can also wait for something async to happen
                // await fetch("/api/counter/details") and add it to the initial state if needed
                setInitialState(initialState);
            });
    }
}
