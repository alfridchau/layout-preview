//Libraries
import React, { useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Queries
import MY_PROJECT_QUERY from "../../apollo/queries/project/my_project";

//Components
import Project_Title from "../../components/project_title";
import PagesList from "../../components/PagesList";
import PrototypeURL from "../../components/prototype_url";

const Project = ({uid}) => {
	const router = useRouter()
	
	const [project, setProject] = useState([]);
	const [prototypeTitle, setPrototypeTitle] = useState("Prototypes:");
	const [desktopPrototype, setDesktopPrototype] = useState();
	const [tabletPrototype, setTabletPrototype] = useState();
	const [mobilePrototype, setMobilePrototype] = useState();

	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {
			router.push("/");
		}
	});

	const { data: data, loading: loading, error: error } = useQuery(MY_PROJECT_QUERY, {
		variables: { uid: uid },
	});
	if (error) {
	  console.error(JSON.stringify(error));
	  return <div>Error!</div>;
	}

	useEffect(() => {
		if (data) {
			setProject(data.myProject);
			if (data.myProject.desktop_prototype != null) {
				setDesktopPrototype(data.myProject.desktop_prototype.url);
			}
			if (data.myProject.tablet_prototype != null) {
				setTabletPrototype(data.myProject.tablet_prototype.url);
			}
			if (data.myProject.mobile_prototype != null) {
				setMobilePrototype(data.myProject.mobile_prototype.url);
			}
			
			
		}
	});
	

  	return loading? (
		<div>
			<p>Loading</p>
		</div>
	): (
    	<div>
			<Project_Title name={project.name} />
			<h2>{prototypeTitle}</h2>
			<PrototypeURL type="desktop" url={desktopPrototype} />
			<PrototypeURL type="tablet" url={tabletPrototype} />
			<PrototypeURL type="mobile" url={mobilePrototype} />
			<h2>Layouts:</h2>
			<PagesList pages={project.page} />
			<style jsx>{`
				h2 {
					font-size: 35px;
					margin-top: 50px;
					margin-bottom: 20px;
				}
			`}</style>
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