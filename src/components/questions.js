import React from "react";
import StarRating from "./stars.js";
import './questions.css';
function Questions() {
    return(
        <div>
            <form className="Questions">
                <label><b>1. Does he/she able to plan effectively to complete a Task?</b></label>
                <StarRating />
                <label><b>2. How is the employee’s performance in terms of complying with deadlines?</b></label>
                <StarRating />
                <label><b>3. How well does the employee communicate verbally and in writing with colleagues?</b></label>
                <StarRating />
                <label><b>4. Overall how effective he/she is at his/her Job?</b></label>
                <StarRating />
                <label><b>5. How likely you would recommend him for other Projects?</b></label>
                <StarRating />
            </form>
        </div>
    )
}

export default Questions;