import React, { PureComponent } from "react";
import "./page_4.css";

class Page4 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="layout_portfolio layout_contacts">
                <input placeholder="Ваше Имя" type="text" className="input_data"></input>
                <input placeholder="Ваш e-mail" type="text" className="input_data"></input>
                <textarea placeholder="Текст сообщения" className="textarea_data"></textarea>
                <input type="button" className="input_data input_data_button" value='Отправить'></input>
            </div>

        );
    }
}

Page4.propTypes = {
};
export default Page4;

