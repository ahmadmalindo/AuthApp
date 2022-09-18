import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AppStack from "./app";

const RootNavigator = createSwitchNavigator({
    app: AppStack,
});

export default createAppContainer(RootNavigator)