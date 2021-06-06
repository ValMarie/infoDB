import React, {Component} from 'react'


class Navigation extends Component{
    render () {
        return (
            <nav className={"navbar bg-primary"}>
                <a className={"navbar-brand text-light"} href="/" style={{color: "#fff"}}>
                    Back4App
                </a>
            </nav>

        );
    }
}
export default  Navigation