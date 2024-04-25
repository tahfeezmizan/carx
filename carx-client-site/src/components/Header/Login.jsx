import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

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
                <h2 className="text-4xl text-center pb-5">Lgin!</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default Login;