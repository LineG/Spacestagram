import React, { useState, useCallback } from "react";
import { map } from "lodash";
import { Card } from "./Card";
import {
	Page,
	Form,
	FormLayout,
	Button,
	Select,
	RangeSlider,
} from "@shopify/polaris";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchImages } from "../redux/fetchImages";
import { RootState } from "../redux/store";

export const MainPage = () => {
	const dispatch = useDispatch();
	const [hoverName, setHoverName] = useState("curiosity");
	const [sol, setSol] = useState(500);
	const imagesState = useSelector((state: RootState) => state.images);
	const options = [
		{ label: "Curiosity", value: "curiosity" },
		{ label: "Opportunity", value: "opportunity" },
		{ label: "Spirit", value: "spirit" },
	];

	const handleSubmit = useCallback(
		(_event) => {
			console.log("search", hoverName);
			dispatch(fetchImages(hoverName, sol));
		},
		[hoverName]
	);

	const handleSelectChange = useCallback((name: string) => {
		setHoverName(name), console.log(name);
	}, []);

	const handleRangeSliderChange = useCallback((value) => setSol(value), [sol]);

	return (
		<Page>
			<Form onSubmit={handleSubmit}>
				<FormLayout>
					<Select
						label="Select the name of the Rover"
						onChange={handleSelectChange}
						value={hoverName}
						options={options}
					/>
					<RangeSlider
						label="Sol"
						value={sol}
						onChange={handleRangeSliderChange}
						min={0}
						max={1000}
						output
					/>
					<Button submit>Search</Button>
				</FormLayout>
			</Form>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flex: 1,
					flexWrap: "wrap",
				}}
			>
				{imagesState.imagesPayload
					? map(imagesState.imagesPayload, (img) => (
							<Card imageSrc={img.img_src} key={img.id} />
					  ))
					: null}
			</div>
		</Page>
	);
};
