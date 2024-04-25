import { useContext } from "react";
import { useForm } from "react-hook-form";
import UrlContext from "../Context/UrlContext";

const AddProduct = () => {
    const url = useContext(UrlContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);

        fetch(url+"/cars", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="w-full md:w-8/12 mx-auto py-2">
            <div className="max-w-screen-md mx-auto border rounded-lg p-12">
                <h2 className="text-4xl text-center pb-5">Added New Car</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Name</label>
                            <input
                                type="text" name="name"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Brand Name</label>
                            <input
                                type="text" name="brandname"
                                placeholder="Car Brand Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("brandname", { required: true })} />
                            {errors.brandname && <span className="text-red-500 text-sm">Brand name is required</span>}
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Engine Type</label>
                            <input
                                type="text" name="enginetype"
                                placeholder="Engine Types"
                                className="input input-bordered w-full max-w-xs"
                                {...register("enginetype", { required: true })} />
                            {errors.enginetype && <span className="text-red-500 text-sm">Engine type is required</span>}
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Car Price</label>
                            <input
                                type="number" name="price"
                                placeholder="Price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", { required: true })} />
                            {errors.price && <span className="text-red-500 text-sm">Price is required</span>}
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Image</label>
                            <input
                                type="text" name="image"
                                placeholder="Car Brand Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", { required: true })} />
                            {errors.image && <span className="text-red-500 text-sm">Image is required</span>}
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Rating</label>
                            <input
                                type="number" name="rating"
                                placeholder="Car Brand Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("rating", { required: true })} />
                            {errors.rating && <span className="text-red-500 text-sm">Rating is required</span>}
                        </div>

                    </div>
                    <div className=" space-y-2 mb-4">
                        <label className="text-lg font-medium block">Short Description</label>
                        <textarea
                            placeholder="Short Description"
                            className="textarea textarea-bordered  w-full"
                            {...register("description")}
                        ></textarea>

                        {/* {errors.description && <span className="text-red-500 text-sm">Rating is required</span>} */}
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddProduct;

// Image
// Name
// Brand Name
// Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
// Price
// Short description
// Rating
// Add button