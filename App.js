import React from "react"
import Navbar from "./components/Navbar"
import Travel from "./components/Travel"
import data from "./data"

export default function App(){
    const travel = data.map(item => {
        return (
            <Travel
                key={item.title}
                {...item}
            />
        )
    }) 

    return(
        <div>
            <Navbar />
            <section>
                {travel}
            </section>
        </div>
    )
}
