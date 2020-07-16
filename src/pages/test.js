import React, { Component } from 'react';
import { Button,WhiteSpace,WingBlank } from 'antd-mobile';
export default class ButtonDemo extends Component {
static propTypes = {

};
render() {
return (
<div className="demo-button-demo">
    <WingBlank>
        <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
    </WingBlank>

</div>
);
}
}

