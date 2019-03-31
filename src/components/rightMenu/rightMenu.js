import React, { PureComponent } from "react";
import "./rightMenu.css";
import "../../fonts/fonts.css";

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
                    id: 'page_3',
                    activity: false
                },
                {
                    name: 'Portfolio',
                    id: 'page_2',
                    activity: false
                },
                {
                    name: 'Contacts',
                    id: 'page_4',
                    activity: false
                },
            ],
        };
    }
    render() {
        return (
            <div>
                <div id='burgerMenu' onClick={this.tagleMenu.bind(this)}><i className="fas fa-bars"></i></div>
                <header id='header' className='header_mobile '>
                    <div id='closeMenu'  onClick={this.tagleMenu.bind(this)}><i className="fas fa-times"></i></div>
                    <div className="mail_lay">
                        <div className="social">
                            <a className="gmail_social" href="mailto:and.popytaev@gmail.com">
                                <span className="e-mail_item">and.popytaev@gmail.com</span>
                                <div className="email_social_item" ><i className="fas fa-envelope"></i></div>
                            </a>
                            <div className="gmail_social">
                                <a href="" className="social_item"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=100004484117242" target="_blank" rel="noopener noreferrer" className="social_item"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://vk.com/id96655676"  target="_blank" rel="noopener noreferrer" className="social_item"><i className="fab fa-vk"></i></a>
                            </div>

                        
                            </div>
                    </div>
                    <div className='buttons_lay'>
                        {this.state.menuItems.map(item => {
                            return <div 
                            className="button" 
                            key={item.id.toString()} 
                            id={item.id} 
                            onClick={this.pageChange.bind(this)}>
                            
                            <span id={item.id} onClick={this.pageChange2.bind(this)}>{item.name}</span>
                            </div>
                        })}
                    </div>
                </header>
            </div>
        );
    }

    pageChange(event) {
       this.props.updatePage(event.target.id);
       if (document.documentElement.clientWidth < 450) {
           this.tagleMenu();
       }
    }
    pageChange2(event) {
        event.stopPropagation();
       this.props.updatePage(event.target.id);
       if (document.documentElement.clientWidth < 450) {
           this.tagleMenu();
       }
    }
    tagleMenu(){
        let header = document.getElementById('header');
        if(header.classList.contains('header_mobile_open')){
            header.classList.remove('header_mobile_open');
        }else{
            header.classList.add('header_mobile_open');
        }
    }
}

RightMenu.propTypes = {
};
export default RightMenu;

