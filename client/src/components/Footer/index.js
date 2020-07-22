import React from 'react'
import 'materialize-css'
import { Link, useLocation } from 'react-router-dom'
import {Footer} from 'react-materialize'
import './style.css'

function newFooter() {

    // const possiblePaths = [ '/match', '/profile', '/messages']
    const { pathname } = useLocation()

    const renderFoot = () => {
        if (pathname !== '/'){
            return(
                <Footer
                className="example"
                copyrights=""
                links={
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">About The Team!</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Our Mission</a></li>
                </ul>}
                moreLinks={<a className="grey-text text-lighten-4 right" href="#!"></a>}
                >
                <h5 className="white-text">
                You want a friend? Get a dog.
                </h5>

            </Footer>

            )
        }
        else{
            return(<div></div>)
        }

    }
    return renderFoot()
}

export default newFooter;
