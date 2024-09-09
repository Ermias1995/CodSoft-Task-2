import InputField from "../components/InputField"

function Location({handleChange}) {
  return (
    <div>
        <h4 className="text-lg font-medium mb-2">Location</h4>

        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className="checkmark"></span>All
            </label>

            <InputField handleChange={handleChange} value="Addis Ababa" title="Addis Ababa" name="test"/>
            <InputField handleChange={handleChange} value="BahirDar" title="BahirDar" name="test"/>
            <InputField handleChange={handleChange} value="Mekele" title="Mekele" name="test"/>
            <InputField handleChange={handleChange} value="Jimma" title="Jimma" name="test"/>
        </div>
    </div>
  )
}
export default Location