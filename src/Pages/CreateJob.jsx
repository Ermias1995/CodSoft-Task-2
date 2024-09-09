import {useForm} from "react-hook-form"
function CreateJob() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <div className="bg-gray-100 py-10px-4 lg:px-16 space-y-2">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Job Title</label>
                        <input type="text" placeholder="Web Developer" 
                               {...register("jobTitle")} className="block w-full flex-1 border-1 py-1.5 pl-2 placeholder:text-gray-300"/>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Company Name</label>
                        <input type="text" placeholder="Ex: iCog Labs" 
                               {...register("companyName")} className="block w-full flex-1 border-1 py-1.5 pl-2 placeholder:text-gray-300"/>
                    </div>

                    
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Minimum Salary</label>
                        <input type="text" placeholder="20k" 
                               {...register("minPrice")} className="block w-full flex-1 border-1 py-1.5 pl-2 placeholder:text-gray-300"/>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Maximum Salary</label>
                        <input type="text" placeholder="100k" 
                               {...register("maxPrice")} className="block w-full flex-1 border-1 py-1.5 pl-2 placeholder:text-gray-300"/>
                    </div>     
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Salary Type</label>
                        <select {...register("salaryType")} className="block w-full flex-1 border-1 py-1.5 pl-2 placeholder:text-gray-300">
                            <option value="">Choose your salary</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Job Location</label>
                        <input type="text" placeholder="Addis Ababa" 
                               {...register("jobLocation")} className="block w-full flex-1 border-1 py-1.5 pl-2 placeholder:text-gray-300"/>
                    </div>     
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Job Posting Date</label>
                        <input type="date" placeholder="" 
                               {...register("postingDate")} className="block w-full flex-1 border-1 py-1.5 pl-2 placeholder:text-gray-300"/>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Experience Level</label>
                        <select {...register("experienceLevel")} className="block w-full flex-1 border-1 py-1.5 pl-2 placeholder:text-gray-300">
                            <option value="">Choose your Experience Level</option>
                            <option value="Any experience">Any experience</option>
                            <option value="Work remotely">Work remotely</option>
                            <option value="Intership">Intership</option>
                        </select>
                    </div>     
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Employment Type</label>
                        <select {...register("employmentType")} className="block w-full flex-1 border-1 py-1.5 pl-2 placeholder:text-gray-300">
                            <option value="">Choose your Employment Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Part-time">Part-time</option>
                        </select>
                    </div>     
                </div>

                

                <input type="submit" className="bg-secondary rounded-sm text-white font-bold py-2 px-2 my-4"/>
            </form>
        </div>
    </div>
  )
}
export default CreateJob