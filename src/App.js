import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">Tailwind Integration</div>
          <p class="text-gray-500">Done!</p>
        </div>
        
      </div>
      <div>
        <button class="m-2 py-6 px-6 font-semibold rounded-lg shadow-md text-white text-xl bg-green-700 hover:bg-green-900">Get All</button>
      </div>
      <div>
        <button class="m-2 py-6 px-6 font-semibold rounded-lg shadow-md text-white text-xl bg-green-500 hover:bg-green-700">Get One</button>
      </div>
      <div>
        <button class="m-2 py-6 px-6 font-semibold rounded-lg shadow-md text-white text-xl bg-yellow-500 hover:bg-yellow-700">Create One</button>
      </div>
      <div>
        <button class="m-2 py-6 px-6 font-semibold rounded-lg shadow-md text-white text-xl bg-purple-500 hover:bg-purple-700">Update One</button>
      </div>
      <div>
        <button class="m-2 py-6 px-6 font-semibold rounded-lg shadow-md text-white text-xl bg-red-500 hover:bg-green-700">Delete one</button>
      </div>
    </div>
  );
}

export default App;
