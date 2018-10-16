import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "./actions";
import {Button, Container, Header, Icon, Segment} from "semantic-ui-react";

export default @connect((state) => {
    return {
        counterValue: _.get(state.counter, "count", 0),
    };
})
class ReducerPage extends Component {
    incrementCounter(e) {
        const { dispatch } = this.props;
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        dispatch(incrementCounter());
    }

    decrementCounter(e) {
        const { dispatch } = this.props;
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        dispatch(decrementCounter());
    }

    render() {
        const { counterValue } = this.props;
        return (
            <div>
                <Segment
                    inverted
                    textAlign="center"
                    style={{ minHeight: "100vh", padding: "1em 0em" }}
                    vertical
                >
                    <Container text>
                        <Header
                            as="h1"
                            content="REDUX - Counter"
                            inverted
                            style={{
                                fontSize: "4em",
                                fontWeight: "normal",
                                marginBottom: "1em",
                                marginTop: "3em",
                            }}
                        />
                        <Button className="ui animated fade button primary huge" onClick={e => this.incrementCounter(e)}>
                            <div className="visible content">
                                Increment Counter
                            </div>
                            <div className="hidden content">
                                <Icon name="plus" />
                            </div>
                        </Button>
                        <Header
                            as="h1"
                            content={counterValue}
                            inverted
                            style={{
                                fontSize: "4em",
                                fontWeight: "normal",
                                marginBottom: 0,
                            }}
                        />
                        <Button className="ui animated fade button primary huge" onClick={e => this.decrementCounter(e)}>
                            <div className="visible content">
                                Decrement Counter
                            </div>
                            <div className="hidden content">
                                <Icon name="minus" />
                            </div>
                        </Button>
                    </Container>
                </Segment>
            </div>
        );
    }
}
