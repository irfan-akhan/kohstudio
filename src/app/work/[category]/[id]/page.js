"use client";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const ProjectDetails = () => {
	const params = useParams();
	const pathName = usePathname();
	console.log("ProjectDetails params", params);
	console.log("ProjectDetails pathName", pathName);
	const router = useRouter();

	return <div>page</div>;
};

export default ProjectDetails;
