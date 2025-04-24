import { Component } from "react";
import style from './TaskList.module.scss'

export class TaskList extends Component {
    tasks = [
        { id: 1, text: 'Зустрітись з подругою' },
        { id: 2, text: 'Посповідатись' },
        { id: 3, text: 'Купити мус для волосся' },
        { id: 4, text: 'Купити подарунок брату' },
    ]

    deleteTask = (event) => {
        event.target.parentElement.remove()
    }

    render() {
        return <ul className={style.list}>
            {this.tasks.map(task => {
                return <li key={task.id} className={style.item}>
                    <p className={style.text}>{task.text}</p>
                    <button className={style.btn} onClick={(e)=>this.deleteTask(e)}>delete task</button>
                </li>
            })}
        </ul>
    }
}