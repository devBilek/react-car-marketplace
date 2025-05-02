import {Grid, Text} from "@mantine/core"
import {useParams} from "react-router-dom";
import {useApi} from "../../hooks/useApi";
import {CarAdType} from "./types";

export const CarAd = () => {
    const params = useParams();
    const {data} = useApi<CarAdType>(`http://127.0.0.1:8000/api/carAd/${params.id}`);

    if (!data) {
        return <Text>not found</Text>
    }

    return (
       <>
        <Grid>
            <Grid.Col span={6}>
                {data.brand}
            </Grid.Col>
            <Grid.Col span={6}>
                as
            </Grid.Col>
        </Grid>
       </>
    )
}