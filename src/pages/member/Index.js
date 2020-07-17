import React from 'react'
import {withRouter,Link,BrowserRouter as Router,Route} from 'react-router-dom'
import './../css/index.css'
import {Button, WhiteSpace, WingBlank, NavBar, Icon, Flex, ImagePicker, Progress} from 'antd-mobile';
class index extends React.Component {
    constructor() {
        super()
        this.state = {
            user: '旋风小子',
            src: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
            member: "会员",
            integral: 1950,
            percent: 50,

        }

    }
    // 组件页面跳转
    renderContent(com) {
        return (
            <div >{com}</div>
        );
    }
    render() {
        // 背景色
        const PlaceHolder = ({className = '', ...restProps}) => (
            <div className={`${className} placeholder`} {...restProps} >
                <WhiteSpace size="lg"/>
            </div>
        );
        return (

            <div>
                {/*头部*/}
                <WhiteSpace size="xs"/>
                <WingBlank><PlaceHolder/></WingBlank>
                {/*任务条*/}
                <WingBlank>
                    <div className='renwu'>
                      <span>任务中心</span>
                      <span>积分兑换</span>
                      <span>兑换记录</span>
                      <span>每日签到</span>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div className='con'>
                        <h1>露丝专属会员卡</h1>
                        <p className='p'><Link to='/signIn'>成为露丝专属会员赠免费领取紧致福袋（或领取专属老会员代金券享受特权）</Link></p>
                    </div>
                    <div>
                        <Link to='/signIn' style={{color:"#9495bb"}}>加入露丝会员俱乐部，尊享更多好礼>></Link>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div className='con'>
                        <h1>每日签到，惊喜更多</h1>
                        <p className='p'>
                            <Link to="/signIn">连续签到7天，更多积分等你来拿</Link>
                        </p>
                    </div>
                    <div>
                        <Link to='/signIn' style={{color:"#9495bb"}}>您已经连续签到5天，去签到>></Link>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div className='con'>
                        <h1>完成任务，获得更多积分</h1>
                        <p className='p'><Link to='/signIn'>积分可以兑换更多超值好礼</Link></p>
                    </div>
                    <div>
                        <Link to='/signIn' style={{color:"#9495bb"}}>去做任务>></Link>
                    </div>
                </WingBlank>


            </div>
        )
    }
}

export default withRouter(index)