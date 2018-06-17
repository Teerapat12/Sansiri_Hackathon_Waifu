import React from 'react';
// import { Link } from 'next/router'
import NaverBarProject from './Navbar';
import ShowProject from './showProjectData';

export default class Btn extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NaverBarProject />
                </div>
                <div>
                    <ShowProject />
                </div>
            </div>
        )
    }
}
