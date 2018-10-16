import "semantic-ui-css/semantic.css";
import ReduxClient from "@pawjs/redux/client";
import * as AppReducers from "./app/reducers";

const AppInitialState = {
    counter: {
        count: 5,
    },
};
export default class Client {
    constructor({ addPlugin }) {
        const reduxClient = new ReduxClient({ addPlugin });
        reduxClient.setReducers(AppReducers);
        // If you want to add some redux middleware
        // reduxClient.addMiddleware(AnyMiddleware);

        // If you want to add some redux enahncers
        // reduxClient.addEnhancer(SomeEnhancer);
        addPlugin(reduxClient);

        // ...
    }

    apply(clientHandler) {
        clientHandler
            .hooks
            .reduxInitialState
            .tapPromise("ReduxInitialState", async ({ getInitialState, setInitialState }) => {
                const initialState = Object.assign({}, getInitialState(), AppInitialState);
                // You can also wait for something async to happen
                // await fetch("/api/counter/details") and add it to the initial state if needed
                setInitialState(initialState);
            });
    }
}
