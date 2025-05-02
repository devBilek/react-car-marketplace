import {Banner} from "../components/Banner/Banner"
import {MainContent} from "../components/MainContent/MainContent"
import {CarAd} from "../components/CarAd/CarAd";

export function CarAdPage() {
    return (
        <>
            <Banner />
            <MainContent size="xl">
                <CarAd />
            </MainContent>
        </>
    );
}
