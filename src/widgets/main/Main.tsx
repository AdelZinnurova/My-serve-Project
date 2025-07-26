import {Home} from "@/widgets/main/Home/Home";
import {ForWhomSection} from "@/widgets/main/ForWhomSection/ForWhomSection.tsx";
import {Product} from "@/widgets/main/Product/Product.tsx";
import {Users} from "@/widgets/main/Users/Users.tsx";
import {AboutUs} from "@/widgets/main/AboutUs/AboutUs.tsx";

export const Main = () => {
    return (
        <>
            <Home/>
            <ForWhomSection/>
            <Product/>
            <Users/>
            <AboutUs/>
            {/*<Contacts/>*/}
        </>
    );
};