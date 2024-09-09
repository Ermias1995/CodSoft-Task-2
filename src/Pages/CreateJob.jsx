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
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}
export default CreateJob