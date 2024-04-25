import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loaderData = useLoaderData();
    console.log(loaderData)

    return (
        <div>
            <h1 className="text-7xl">Hello World</h1>

        </div>
    );
};

export default Home;