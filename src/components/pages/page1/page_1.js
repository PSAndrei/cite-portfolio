import React, { PureComponent } from "react";
import "./page_1.css";

class Page1 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="title">
                <div className="title_text">
                    <span className="title_text_red">&lt;code&gt;</span> <span className="title_text_white"> Hi.I am Andrey </span> <span className="title_text_red">&lt;/code&gt;</span>
                </div>
            </div>
        );
    }
}

Page1.propTypes = {
};
export default Page1;

  