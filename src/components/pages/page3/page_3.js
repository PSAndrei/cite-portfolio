import React, { PureComponent } from "react";
import "./page_3.css";

class Page3 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="title">
                <div className="title_text title_text_size">
                    <span className="title_text_red ">&lt;h1&gt;</span> <span className="title_text_white"> Привет, меня зовут Андрей! </span> <span className="title_text_red">&lt;/h1&gt;</span><br></br><br></br>
                    <span className="title_text_red ">&lt;p&gt;</span> <span className="title_text_white"> Мне 25 лет и я начинающий <span className='title_text_red'>front-end</span> разработчик </span> <span className="title_text_red">&lt;/p&gt;</span><br></br><br></br>
                    <span className="title_text_red ">&lt;p&gt;</span> <span className="title_text_white"> Мои навыки: <span className="title_text_red">&lt;/p&gt;</span></span><br></br>
                    <span className="title_text_red ">&lt;ul&gt;</span><br></br>
                    <span className="title_text_red title_text_offset">&lt;li&gt;</span> <span className="title_text_white">HTML<span className="title_text_red">&lt;/li&gt;</span></span><br></br>
                    <span className="title_text_red title_text_offset">&lt;li&gt;</span> <span className="title_text_white">CSS<span className="title_text_red">&lt;/li&gt;</span></span><br></br>
                    <span className="title_text_red title_text_offset">&lt;li&gt;</span> <span className="title_text_white">JS<span className="title_text_red">&lt;/li&gt;</span></span><br></br>
                    <span className="title_text_red title_text_offset">&lt;li&gt;</span> <span className="title_text_white">Git<span className="title_text_red">&lt;/li&gt;</span></span><br></br>
                    <span className="title_text_red ">&lt;/ul&gt;</span><br></br>
                </div>
            </div>
        );
    }
}

Page3.propTypes = {
};
export default Page3;

