import React from 'react';
import s from './App.module.css';
import TodoList from './TodoList/TodoList';
import AddNewItemForm from './AddNewItemForm/AddNewItemForm'
import { connect } from 'react-redux';
import { getTodolistsTC, addTodolistTC, showTodolistsAC } from './redux/reducer';

interface IProps {
    getTodolistsTC: () => void
    addTodolistTC: (title: string) => void
    showTodolistsAC: () => void
}

interface mapStateToProps {
    todolists: any[],
    error: boolean
}

type AppProps = IProps & mapStateToProps
class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.getTodolistsTC()
    }

    nextTodoListId = 0;

    state = {
        todolists: []
    }

    onAddTodoListClick = (title: string) => {
        this.props.addTodolistTC(title)
    }

    showTodolists = () => {
        this.props.showTodolistsAC()
    }

    render = () => {
        return (
            <>
                {!this.props.error
                    ? <div className={s.appWrapper}>
                        <div><AddNewItemForm addItem={this.onAddTodoListClick} style='addNewTodo' placeholder='New To-do list name' /></div>
                        <div className={s.todoWrapper}>
                            {this.props.todolists.map((el) => <TodoList key={el.id} id={el.id} title={el.title} tasks={el.tasks} />)}
                        </div>
                    </div>
                    : <div>
                        Maximum count of Todo lists count is 10
                        <button onClick={this.showTodolists}>Come back</button>
                    </div>}
            </>
        );
    }
}


const mapStateToProps = (state: State): mapStateToProps => {
    return {
        todolists: state.todolists,
        error: state.error
    }
}

const ConnectedApp = connect(mapStateToProps, { getTodolistsTC, addTodolistTC, showTodolistsAC })(App);
export default ConnectedApp;
