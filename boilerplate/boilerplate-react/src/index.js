import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types'
import './index.css';
// import logo from './logo.svg';
import './App.css';
import * as serviceWorker from './serviceWorker';

/**
 * Greeting 组件，使用propsType进行类型检查，当传入的 prop 值类型不正确时，JavaScript 控制台将会显示警告。
 * 出于性能方面的考虑，propTypes 仅在开发模式下进行检查。
 */
class Greeting extends React.Component {
    render() {
        return (
            <h5>Hello,this is {this.props.name}</h5>
        )
    }
}

Greeting.propTypes = {
    name: PropTypes.string
};

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.data = {
            todoList: [{content: '学习游泳'}, {content: '跳伞'}]
        }
    }

    render() {
        return (
            <div>{
            }</div>
        );
    }
}


// 无状态组件
function App() {
    // jsx语法，
    return (
        <div className="App">
            <header className="App-header">
                <Greeting name={'简单功能演示'}/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
