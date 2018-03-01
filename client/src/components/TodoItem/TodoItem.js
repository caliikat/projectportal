import React, {Component} from "react";
import "./TodoItem.css";


const TodoItem = props => {
    return (
        <div className="todoitem">
            <div className="content">
                <ul>
                    <li>
                         <p>Queue Title:</p> {props.queueTitle}
                    </li>
                    <li>
                        <p>Description:</p> {props.description}
                    </li>
                    <li>
                        <p>Due Date:</p> {props.dueDate}
                    </li>
                </ul>
            </div>

            <span onClick={() => props.removeTodo(props.id)} className="removeTodo">
            </span>

        </div>
    );
};

export default TodoItem;
