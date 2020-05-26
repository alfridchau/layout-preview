//Libraries
import React, { useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Queries
import MY_PROJECT_QUERY from "../../apollo/queries/project/my_project";

//Components
import Project_Title from "../../components/project_title";
import Versions_Select from "../../components/versions_select";

const Project = ({uid}) => {
	const [isLoading, setLoading] = useState(true);
	const router = useRouter()
	

	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {
			router.push("/");
		} else {
			setLoading(false);
		}
	}, [isLoading]);

	const { data: data, loading: loading, error: error } = useQuery(MY_PROJECT_QUERY, {
		variables: { uid: uid },
	});
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
	  console.error(JSON.stringify(error));
	  return <div>Error!</div>;
	}
	let project = data.myProject;
 

  	return isLoading == true? (
		  <div>
			  <p>Loading</p>
		  </div>
	  ): (
    	<div>
      		<div className="uk-section">
				<Project_Title name={project.name} />
				<Versions_Select project_uid={uid} />
				{/* <Query query={MY_PROJECTS_QUERY} email={email}>
					{({data: { project }}) => {
						return (
							<div className="uk-container uk-container-large">
							<Project_Title name={project.name} />
							<label>Layout Versions:</label>
							<Versions_Select versions={project.version} project_uid={project.uid} />
						</div>				
					)}}
				</Query> */}
			</div>
    	</div>
  	);
};

export async function getServerSideProps(context) {
	const uid = context.params.uid;
	return {
	  props: {
		  uid,
	  }
	}
}


export default Project;