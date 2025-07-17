import {Home} from "@/widgets/main/Home/Home";
import {ForWhomSection} from "@/widgets/main/ForWhomSection/ForWhomSection.tsx";
import {Product} from "@/widgets/main/Product/Product.tsx";

export const Main = () => {
    return (
        <>
            <Home/>
            <ForWhomSection/>
            <Product/>
            {/*<Users/>*/}
            {/*<About/>*/}
            {/*<Contacts/>*/}
        </>
    );
};