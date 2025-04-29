import {Banner} from "../components/Banner/Banner"
import {MainContent} from "../components/MainContent/MainContent"
import {SearchCarForm} from "../components/SearchCarForm/SearchCarForm";

export function HomePage() {
  return (
    <>
        <Banner />
        <MainContent>
            <SearchCarForm />
        </MainContent>
    </>
  );
}
