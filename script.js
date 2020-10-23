import Vue from 'vue';
import Todo from './vue/Todo';

new Vue({ render: createElement => createElement(Todo) }).$mount('app');