import { useForm } from "react-hook-form";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className="w-full md:w-8/12 mx-auto py-2">
            <div className="max-w-screen-md mx-auto border rounded-lg p-10">
                <h2 className="text-4xl">Added New Car</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Name</label>
                            <input
                                type="text" name="name"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", { required: true })} />
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Brand Name</label>
                            <input
                                type="text" name="brandname"
                                placeholder="Car Brand Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("brandname", { required: true })} />
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Name</label>
                            <input type="text" name="name" placeholder="Car" className="input input-bordered w-full max-w-xs" id="" />
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Brand Name</label>
                            <input type="text" name="brandname" placeholder="Car" className="input input-bordered w-full max-w-xs" id="" />
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Name</label>
                            <input type="text" name="name" placeholder="Car" className="input input-bordered w-full max-w-xs" id="" />
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Brand Name</label>
                            <input type="text" name="brandname" placeholder="Car" className="input input-bordered w-full max-w-xs" id="" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
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