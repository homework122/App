import React from 'react'
import {Icon, NavBar} from "antd-mobile";
import {TabBar} from "antd-mobile/lib/tab-bar";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{zIndex: 1,display:'fixed'}}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >会员</NavBar>
            </div>

        )

    }
}

export {Navbar as default}