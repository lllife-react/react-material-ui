/// <reference path="../../typings/global.d.ts" />

import RaisedButton from "material-ui/lib/raised-button";

class MyCard extends React.Component<any, any> {
    render() {
        return (<span>Hello, world!</span>)
    }
}

ReactDOM.render(<MyCard/>, document.getElementById("react"));
