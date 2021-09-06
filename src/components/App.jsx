import React, { Component } from 'react';
import DATA from '../data/appData';
import './css/global.css';
import Form from './Form';
import ControlSection from './layout/ControlSection';
import Footer from './layout/Footer';
import Header from './layout/Header';
import MainSection from './layout/MainSection';
import SearchSection from './layout/SearchSection';
import Model from './Model';

class App extends Component {
    state = {
        data: [],
        view: 'list',
        searchTram: 'all',
        inputSrc: '',
        contact: false,
        isOpen: false,
    };

    componentDidMount() {
        this.setState({
            data: DATA,
        });
    }

    onChangeSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    toggler = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen,
        });
    };

    handelCotact = () => {
        const { contact } = this.state;
        this.setState({
            contact: !contact,
        });
    };

    handelCheck = (value) => {
        const { data } = this.state;
        const dataUpdate = [...data];
        const dataUp = dataUpdate.find((d) => d.id === value.id);
        dataUp.isComplete = !value.isComplete;
        this.setState({
            data: dataUpdate,
        });
    };

    handelSearch = (search) => {
        this.setState({
            searchTram: search,
        });
    };

    handelView = (value) => {
        this.setState({
            view: value,
        });
    };

    handelDelete = (value) => {
        const { data } = this.state;
        if (value === 'running') {
            const selectded = data.filter((d) => d.isComplete);
            return this.setState({
                data: selectded,
            });
        }
        if (value === 'completed') {
            const complete = data.filter((d) => !d.isComplete);
            return this.setState({
                data: complete,
            });
        }
        if (value === 'reset') {
            return this.setState({
                data: [],
            });
        }
        return 0;
    };

    addTodo = (value) => {
        const { data } = this.state;
        const addTodo = value;
        addTodo.id = new Date().toLocaleTimeString();
        addTodo.date = new Date().toDateString();
        const addNew = [addTodo, ...data];
        this.setState({
            data: addNew,
        });

        this.toggler();
    };

    btnSearch = (data) => {
        const { searchTram } = this.state;
        if (searchTram === 'running') {
            const running = data.filter((d) => d.isComplete);
            return running;
        }
        if (searchTram === 'completed') {
            const complete = data.filter((d) => !d.isComplete);
            return complete;
        }

        return data;
    };

    viewPerfom = () => {
        const { view, inputSrc, data } = this.state;
        let datas = data.filter((d) =>
            d.title.toLowerCase().includes(inputSrc.toLocaleLowerCase())
        );

        datas = this.btnSearch(datas);

        return view === 'list' ? (
            <MainSection data={datas} handelCheck={this.handelCheck} />
        ) : (
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
                Table View Not Implement Right Now
            </h1>
        );
    };

    render() {
        const { searchTram, view, inputSrc, isOpen, contact } = this.state;
        console.log(view);
        return (
            <>
                <Header toggler={this.handelCotact} />
                <SearchSection
                    onChangeSearch={this.onChangeSearch}
                    inputSrc={inputSrc}
                    toggler={this.toggler}
                />
                <ControlSection
                    handelSearch={this.handelSearch}
                    search={searchTram}
                    handelView={this.handelView}
                    view={view}
                    handelDelete={this.handelDelete}
                />
                {this.viewPerfom()}
                <Footer />
                <Model isOpen={isOpen} toggler={this.toggler}>
                    <Form addTodo={this.addTodo} />
                </Model>

                <Model isOpen={contact} toggler={this.handelCotact}>
                    <h1 style={{ textAlign: 'center' }}>Contact Form</h1>
                </Model>
            </>
        );
    }
}

export default App;
