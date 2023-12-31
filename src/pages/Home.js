import React from "react"
import Nav from "../Nav";
import NavLog from "../NavLog";
import Footer from "../Footer";
import Header from "../Header";
import List from "./List";
import UseData from "../data/useData"


const Home = () => {

    return(

		<div>

			<Header/>

			<NavLog/>

			<Nav/>

			<article  id="main-info">

				<section className="description text-center home">
					<h2>Welcome to Group 5's Weekly Planner!</h2>
					<p>
						Our Planner allows you to keep track of your weekly tasks and events. <br/>
						With this tool, never miss a doctor's appointment, class, or work meeting ever again! <br/>
						Login to begin adding to your planner
					</p>
				</section>

				<section className="function">
					<h2>How it works:</h2>
					<p>
						The "New Event" button allows you to add a event, task, or reminder to your planner. <br/>
						Assign each new event details such as a name, description, time and day, priority, etc. <br/>
					</p>
				</section>

				<section className="viewing">
					<h2>Viewing Events:</h2>
					<p>
						"Events Details" provides a weekly view of all your created events <br/>
						To expand the information for each event, click "View Event Details" to display all info!
					</p>
				</section>
			</article>

			<Footer/>


		</div>

    );
   
    
}

export default Home;

