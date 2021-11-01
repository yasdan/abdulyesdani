import React from "react";
import { Link } from'react-router-dom';

export default function HomePage(){
    return(
        <div>
            <h1>HomePage</h1>
            <p>
                <Link to="abdulyesdani">abdul yesdani</Link> on GitHub
            </p>
        </div>
    )
}