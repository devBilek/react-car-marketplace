import {Divider, Grid, Text, Title} from "@mantine/core"
import {useParams} from "react-router-dom";
import {useApi} from "../../hooks/useApi";
import {CarAdType} from "./types";
import {CarGallery} from "../carGallery/CarGallery";
import {CarSidebar} from "../CarSidebar/CarSidebar";
import {KeySpecs} from "../KeySpecs/KeySpecs";
import {DescriptionSection} from "../DescriptionSection/DescriptionSection";
import {DetailsTable} from "../DetailsTable/DetailsTable";

export const CarAd = () => {
    const params = useParams();
    const {data} = useApi<CarAdType>(`http://127.0.0.1:8000/api/carAd/${params.id}`);

    if (!data) {
        return <Text>not found</Text>
    }

    return (
       <>
        <Grid mt='xl' mx="lg">
            <Grid.Col span={9}>
                <CarGallery photos={data.photos || []} />
                <KeySpecs mileage={data.mileage} fuel_type={data.fuel_type} transmission={data.transmission} body_type={data.body_type} engine_power={data.engine_power} production_year={data.production_year} />
                <DescriptionSection description={data.description || ""} />

                <Divider h='md' mt={50}/>
                <Title order={3} mb='xs'>Details</Title>

                <DetailsTable
                    title="Basic Information"
                    data={[
                        { label: "Title", value: data.title },
                        { label: "Brand", value: data.brand },
                        { label: "Model", value: data.model },
                        { label: "Generation", value: data.generation },
                        { label: "Price", value: `${data.price} PLN` },
                        { label: "Production Year", value: data.production_year },
                        { label: "Mileage", value: `${data.mileage} km` },
                        { label: "Condition", value: data.condition },
                    ]}
                />

                <DetailsTable
                    title="Technical Details"
                    data={[
                        { label: "Fuel Type", value: data.fuel_type },
                        { label: "Engine Capacity", value: data.engine_capacity && `${data.engine_capacity} cm³` },
                        { label: "Engine Power", value: data.engine_power && `${data.engine_power} HP` },
                        { label: "Body Type", value: data.body_type },
                        { label: "Transmission", value: data.transmission },
                        { label: "Drive Type", value: data.drive_type },
                        { label: "Emission Standard", value: data.emission_standard },
                    ]}
                />

                {data.features && (
                    <DetailsTable
                        title="Equipment"
                        data={data.features.map(feature => ({
                            label: '',
                            value: `• ${feature}`,
                            span: 2
                        }))}
                    />
                )}

                <DetailsTable
                    title="Seller Information"
                    data={[
                        { label: "Seller Type", value: data.is_private_seller ? "Private" : "Dealer" },
                        { label: "Phone Number", value: data.phone_number },
                        { label: "City", value: data.city },
                    ]}
                />

                <DetailsTable
                    title="Additional Information"
                    data={[
                        { label: "First Registration", value: data.first_registration_date },
                        { label: "Warranty Until", value: data.warranty_until },
                        { label: "Service History", value: data.service_history ? "Yes" : "No" },
                        { label: "Negotiable", value: data.is_negotiable ? "Yes" : "No" },
                        { label: "Leasing Possible", value: data.is_leasing_possible ? "Yes" : "No" },
                    ]}
                />
            </Grid.Col>
            <Grid.Col span={3} px='md'>
                <CarSidebar title={data.title} brand={data.brand} model={data.model} generation={data.generation} production_year={data.production_year} price={data.price}/>
            </Grid.Col>
        </Grid>
       </>
    )
}