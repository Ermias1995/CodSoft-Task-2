import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

function Card({data}) {
    const {companyName, jobTitle,companyLogo, minPrice, maxPrice, salaryType, jobLocation, employementType, postingDate,
         description} = data;

  return (
    <section className="card">
        <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start"/>
        <img src={companyLogo} alt=""/>
        <div>
            <h4 className="text-gray-900 mb-1">{companyName}</h4>
            <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

            <div className="text-gray-900 text-base flex flex-wrap gap-2 mb-2">
                <span className="flex items-center gap-2"><FiMapPin/>{jobLocation}</span>
                <span className="flex items-center gap-2"><FiClock/>{employementType}</span>
                <span className="flex items-center gap-2"><FiDollarSign/>{minPrice}-{maxPrice}k</span>
                <span className="flex items-center gap-2"><FiCalendar/>{postingDate}</span>
            </div>

            <p className="text-gray-800 font-sans">{description}</p>
        </div>
    </section>
  )
}
export default Card