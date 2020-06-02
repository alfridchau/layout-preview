//Libraries
import React, { useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Queries
import MY_PROJECT_QUERY from "../../apollo/queries/project/my_project";

//Components
import Project_Title from "../../components/project_title";
import PagesList from "../../components/PagesList";

const Project = ({uid}) => {
	const [isLoading, setLoading] = useState(true);
	const router = useRouter()
	

	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {
			router.push("/");
		} else {
			setLoading(false);
		}
	}, []);

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
	console.log(project)

  	return isLoading == true? (
		  <div>
			  <p>Loading</p>
		  </div>
	  ): (
    	<div>
      		<div className="uk-section">
				<Project_Title name={project.name} />
				<PagesList pages={project.page} />
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