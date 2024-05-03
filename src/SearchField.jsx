import { useState } from "react";

function SearchField({onSearch}) {
    const [city, setCity] = useState("");
    const handleSearch = () => {
        onSearch(city);
    };
    return (
        <div className="col-start-3 col-span-4 text-center border border-primary rounded-lg shadow-xl">
            <form method="post">
                <div className="p-5">
                    <div className="flex justify-center align-middle space-x-4">
                        <label className="text-black">
                            <input className="px-5 py-1 rounded-md border border-primary" placeholder="Enter city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        </label>
                        <button type="button" className="border border-primary p-1 px-2 rounded-md" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                    <p className="text-red-600" id="searchError"></p>
                    <p id="recentPlaces" className="font-bold mt-5">
                        No recent places...
                    </p>
                    <ul id="recentLocations"></ul>
                </div>
            </form>
        </div>
    );
}
export default SearchField;
