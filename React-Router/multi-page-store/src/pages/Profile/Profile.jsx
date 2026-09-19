export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Profile</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
            <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold">
              JD
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-md border border-gray-200">
                John Doe
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-md border border-gray-200">
                john.doe@example.com
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-md border border-gray-200">
                Administrator
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
