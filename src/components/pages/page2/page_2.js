import React, { PureComponent } from "react";
import "./page_2.css";
import projectImg_1 from  "../../../img/portfolio.jpg";
import projectImg_2 from  "../../../img/portfolio.jpg";
import projectImg_3 from  "../../../img/portfolio.jpg";
import projectImg_4 from  "../../../img/portfolio.jpg";
import projectImg_5 from  "../../../img/portfolio.jpg";

class Page2 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            portfolioItems:[
                {
                    text: 'Мой проект_1',
                    id: '0',
                    img: projectImg_1,
                    url: ''
                },
                {
                    text: 'Мой проект_1',
                    id: '1',
                    img: projectImg_2,
                    url: ''
                },
                {
                    text: 'Мой проект_1',
                    id: '2',
                    img: projectImg_3,
                    url: ''
                },
                {
                    text: 'Мой проект_1',
                    id: '3',
                    img: projectImg_4,
                    url: ''
                },
                {
                    text: 'Мой проект_1',
                    id: '4',
                    img: projectImg_5,
                    url: ''
                },
                {
                    text: 'Мой проект_1',
                    id: '5',
                    img: projectImg_5,
                    url: ''
                },
                {
                    text: 'Мой проект_1',
                    id: '6',
                    img: projectImg_5,
                    url: ''
                },
                {
                    text: 'Мой проект_1',
                    id: '7',
                    img: projectImg_5,
                    url: ''
                },
                {
                    text: 'Мой проект_1',
                    id: '8',
                    img: projectImg_5,
                    url: ''
                },
                {
                    text: 'Мой проект_1',
                    id: '9',
                    img: projectImg_5,
                    url: ''
                },
            ]
            
        };
    }
    render() {
        return (
            <div className="layout_portfolio layout_portfolio_flex">
                {this.state.portfolioItems.map(item => {
                        return <div 
                        className="layout_portfolio_item"
                        key={item.id.toString()}>
                            <div 
                            className="layout_portfolio_item_img"
                            style={{backgroundImage: 'url(' + item.img + ')'}}
                            ></div>
                            <span>{item.text.toString()}</span>
    
                        </div>
                    })}
           
            </div>
        );
    }
}

Page2.propTypes = {
};
export default Page2;

