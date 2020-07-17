import React from 'react'
import { TabBar,NavBar, Icon  } from 'antd-mobile';
import {BrowserRouter as Router,Route, Link, withRouter,Switch} from 'react-router-dom'
// import {BrowserRouter as Router, Route, Redirect,Link, ,withRouter,HashRouter} from 'react-router-dom'
// 引入组件页面
import Index from './Index'

// import Category from './../../../component/category'
// // import Cart from './../../../component/cart'
// import User from './../../../component/user'
import { Button,WhiteSpace,WingBlank } from 'antd-mobile';
import Navbar from "./NavBar";
import Home from "./Home";
import SignIn from "../../signIn";
class MytabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //	重定向
            selectedTab: 'blueTab',
        };
    }
    // 组件页面跳转
    renderContent(com) {
        return (
            <div style={{marginTop:'2.5rem', width: '100%',textAlign:'center'}}>{com}</div>
        );
    }
    render() {
        return (
            <div>
                <div style={{position: 'fixed', height: '93%', width: '100%', buttom: 0,}}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        style={{position: 'fixed', height: '100%', width: '100%', top: 0,}}
                    >
                        {/* 首页 */}
                        <TabBar.Item
                            title="首页"
                            key="home"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            // 选中后的展示图片
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            // 是否选中
                            selected={this.state.selectedTab === 'blueTab'}
                            // bar 点击触发，需要自己改变组件 state & selecte={true}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'blueTab',
                                });
                            }}
                        >
                            {/*// 将 home 组件作为实参传递*/}

                            {/*{this.renderContent(<Home />)}*/}

                        </TabBar.Item>
                        {/* 分类 */}
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="会员"
                            key="member"
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'redTab',
                                });
                            }}
                        >
                                    <Route path="/" exact component={Index}/>
                                    <Route path="/signIn"  component={SignIn}/>
                        </TabBar.Item>

                        {/*// 用户*/}
                        <TabBar.Item
                            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                            title="我的"
                            key=""
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'yellowTab',
                                });
                            }}
                        >
                            {/*{this.renderContent(<User />)}*/}
                        </TabBar.Item>
                    </TabBar>
                </div>
            </div>

        )

    }
}

export default withRouter(MytabBar)