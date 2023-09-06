import './App.css';

import { UilSearch } from '@iconscout/react-unicons';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <div className="flex items-center justify-self-center">
        <input
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          type="text"
          placeholder="search...."
        />
        {/* add search icon here  */} <UilSearch />
      </div>

      <div className="">
        {' '}
        {/* time  */}
        <p> tudesday , 5 september local time : 10:09 AM </p>
      </div>

      <div className="">
        {' '}
        {/* country  */}
        <p> tunis , sousse </p>
      </div>

      <div className="">
        {' '}
        {/* rainy ...  */}
        <p>mi3aw </p>
      </div>
      <div>
        <p> image here </p>
        34 C °
      </div>
    </div>
  );
}

export default App;
