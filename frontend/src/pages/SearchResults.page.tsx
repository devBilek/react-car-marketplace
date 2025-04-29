import {Banner} from "../components/Banner/Banner"
import {MainContent} from "../components/MainContent/MainContent"
import {SearchCarForm} from "../components/SearchCarForm/SearchCarForm";
import {CarSearchResults} from "../components/CarSearchResults/CarSearchResults";


export function SearchResultsPage() {
    return (
        <>
            <Banner />
            <MainContent>
                <SearchCarForm />
                <CarSearchResults />
            </MainContent>
        </>
    );
}