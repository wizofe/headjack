import React from 'react';
const Reflux = require('reflux');

const MatrixActions = require('../actions/MatrixActions');
const ChatStore = require('../stores/ChatStore');

export default React.createClass({

    mixins: [
        Reflux.connect(ChatStore, 'messages')
    ],

    getInitialState: function () {
        return {messages: {room_messages: []}};
    },

    render: function () {

        return <ul>
            {this.state.messages.room_messages.map((msg) =>
            <li key={msg} className="list-group-item">
                <span>{msg}</span>
            </li>
                )}
        </ul>
    }
});