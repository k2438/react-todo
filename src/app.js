import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';

render(
    <div>
        <Header />
        <Todo />
        <Footer />
    </div>,
    document.getElementById('app')
)
