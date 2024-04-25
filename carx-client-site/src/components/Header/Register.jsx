import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div className="w-full md:w-8/12 mx-auto py-2">
            <div className="max-w-screen-sm mx-auto border rounded-lg p-12">
                <h2 className="text-4xl text-center pb-5">Register !</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <div className="space-y-2 mb-4">
                            <label className="text-lg font-medium">Name</label>
                            <input
                                type="text" name="name"
                                placeholder="Name"
                                className="input input-bordered w-full "
                                {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                        </div>
                        <div className="space-y-2 mb-4">
                            <label className="text-lg font-medium">Email</label>
                            <input
                                type="email" name="email"
                                placeholder="Enter You Email"
                                className="input input-bordered w-full "
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500 text-sm">email is required</span>}
                        </div>
                        <div className="space-y-2 mb-4">
                            <label className="text-lg font-medium">Password</label>
                            <input
                                type="email" name="email"
                                placeholder="Enter You Email"
                                className="input input-bordered w-full "
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500 text-sm">email is required</span>}
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Create An Account</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default Register;