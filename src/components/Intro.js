import React from 'react'
import { Link } from 'react-router-dom';

export default function Intro() {
    return (
        <div className="container text-center">
            <h1>Simple React Shop</h1>

            <Link to="/shop">
                <i className="fas fa-shopping-cart fa-10x"></i>
            </Link>
            <h3>Built with</h3>
            <div className="text-left box">

                <ul>
                    {
                        ['React', 'React Router', 'Bootstrap', 'LocalStorage', 'Helper Functions']
                            .map(
                                (item, id) => <li key={id}>{item}</li>
                            )
                    }

                </ul>
            </div>

        </div>
    )
}
