import React from "react";
import { MediaCard } from "@shopify/polaris";

export const Card: React.FC<{ imageSrc: string }> = (props) => {
	return (
		<div
			style={{
				height: "400px",
				width: "250px",
				margin: "25px",
				display: "flex",
				alignContent: "center",
				justifyContent: "center",
			}}
		>
			<MediaCard
				title="Curisity Image"
				description="This is an image"
				portrait={true}
			>
				<img
					src={props.imageSrc}
					alt="A mars Rover"
					width="100%"
					height="100%"
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
			</MediaCard>
		</div>
	);
};
