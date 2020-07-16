import React, { Component } from 'react';
import { Button } from 'antd-mobile';
export default class ButtonDemo extends Component {
static propTypes = {

};
render() {
return (
<div className="demo-button-demo">
<Button type="primary">按钮</Button>
</div>
);
}
}

