import React, { PureComponent } from "react";
import RightMenu from "./components/rightMenu/rightMenu";
import Page1 from "./components/pages/page1/page_1";
import Page2 from "./components/pages/page2/page_2";
import Page3 from "./components/pages/page3/page_3";
import Page4 from "./components/pages/page4/page_4";
import "./App.css";
import "./fonts/fonts.css";

import { CSSTransitionGroup } from 'react-transition-group' 



class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filteredEmoji: 'lalalalala',
            pageId: 'page_1'
        };
    }


    render() {
        let page;

        switch(this.state.pageId) {
            case 'page_1':  
                page = <Page1/>;
                break
          
            case 'page_2':
                page = <Page2/>;
                break
          
            case 'page_3':
                page = <Page3/>;
                break
          
            case 'page_4':
                page = <Page4/>;
                break
          
            default:
                page = <Page1/>;
                break
          }

        return (
            <div className='pre_layout'>
                <div className="wrap">
                        <div className="layout">
                            
                            <div className="wrap_color">
                                <plaintext>
                                {`import React, { PureComponent } from "react";
                                import "./rightMenu.css";
                                
                                class RightMenu extends PureComponent {
                                    constructor(props) {
                                        super(props);
                                        this.state = {
                                            menuItems: [
                                                {
                                                    name: 'Main',
                                                    id: 'page_1',
                                                    activity: true
                                                },
                                                {
                                                    name: 'About me',
                                                    id: 'page_2',
                                                    activity: false
                                                },
                                                {
                                                    name: 'Portfolio',
                                                    id: 'page_3',
                                                    activity: false
                                                },
                                                {
                                                    name: 'Contacts',
                                                    id: 'page_4',
                                                    activity: false
                                                },
                                            ],
                                            // curentPage: {
                                            //     name: 'Main',
                                            //     id: 'page_1',
                                            //     activity: true
                                            // },
                                        };
                                    }
                                    render() {
                                        return (
                                            <div className="component-rightMenu">
                                                <ul>
                                                    {this.state.menuItems.map(item => {
                                                        return <li 
                                                        key={item.id.toString()} 
                                                        id={item.id} 
                                                        onClick={this.pageChange.bind(this)}>
                                                            {item.name}
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        );
                                    }
                                
                                    pageChange(event) {
                                    this.props.updatePage(event.target.id);
                                    }
                                    
                                }
                                
                                RightMenu.propTypes = {
                                };
                                export default RightMenu; `}
                                </plaintext>
                            </div>
                        </div>
                    </div>
                    <RightMenu updatePage={this.updatePage}/>
                    <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {page}
                    </CSSTransitionGroup>
                
                
            </div>
        );
    }


     updatePage = (value) => {
        this.setState({ pageId: value });
        console.log(this.state.pageId);
      }
}
export default App;
