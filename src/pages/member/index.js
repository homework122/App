import React from 'react'
import './../css/index.css'
import { Button,WhiteSpace,WingBlank,NavBar, Icon } from 'antd-mobile';


class index extends React.Component {
    render() {
        // 背景色
        const PlaceHolder = ({ className = '', ...restProps }) => (
            <div className={`${className} placeholder`} {...restProps}>Block</div>
        );
        return (
            <div>
                <WhiteSpace size="xs" />
                <PlaceHolder />

            </div>

        )

    }
}

export {index as default}