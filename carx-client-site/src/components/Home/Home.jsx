import { useLoaderData } from "react-router-dom";
import CarCard from "../Product/CarCard";

const Home = () => {
    const loaderData = useLoaderData();
    // console.log(loaderData)

    return (
        <div className="w-full md:w-8/12 mx-auto px-2 py-10">
            <h1 className="text-7xl">Hello World</h1>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-7 py-10">
                {
                    loaderData.map(card => <CarCard key={card._id} card={card}></CarCard>)
                }
            </div>
        </div>
    );
};

export default Home;