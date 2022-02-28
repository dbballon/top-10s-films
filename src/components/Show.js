import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchShow } from "../api"

export const Show = () => {
    const { id } = useParams();
    const [showDetails, setShowDetails] = useState(null)
    useEffect(() => {
        (async () => {
            const fetchedShow = await fetchShow(id);
            setShowDetails(fetchedShow);
        })();
    }, [id])
    return showDetails && (
        <div className={"singleShow"}>
            <h1>{showDetails.name}</h1>
            <div className={"halfScreen"}>
                <h2>Rating: {showDetails.rating.average}</h2>
                <h2>Summary</h2>
                <p dangerouslySetInnerHTML={createSummary(showDetails.summary)}></p>
            </div>
            <div className={"halfScreen"}>
                <img src={showDetails?.image?.original} alt={showDetails.name} />
            </div>
        </div>
    );
}
export default Show;

function createSummary(text) {
    return { __html: text };
}