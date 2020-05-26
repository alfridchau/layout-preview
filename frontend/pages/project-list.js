//Libraries
import React, { useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Link from 'next/link';

//Queries
import MY_PROJECTS_QUERY from "../apollo/queries/project/my_projects";

const ProjectList = () => {
	const [isLoading, setLoading] = useState(true);
	const router = useRouter();
	
	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {
			router.push("/");
		} else {
			setLoading(false);
		}
	}, [isLoading]);


	// disable query cache if user change
	const { data: data, loading: loading, error: error } = useQuery(MY_PROJECTS_QUERY,{ fetchPolicy: "network-only" });
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
	  console.error(JSON.stringify(error));
	  return <div>Error!</div>;
	}
	let projects = data.myProjects;
	if (projects.length == 1) {
		router.push("/project/[uid].js" ,`/project/${projects[0].uid}`)
	}
 

  	return isLoading == true? (
		  <div>
			  <p>Loading</p>
		  </div>
	  ): (
    	<div>
      		<div className="uk-section">
				  <ul>
					{
						projects.map((project) => (
							<li key={project.id}>
								<Link href="/project/[uid].js" as={`/project/${project.uid}`}>
									<a>{project.name}</a>
								</Link>
							</li>
						))
					}
				</ul>
			</div>
    	</div>
  	);
};

export default ProjectList;