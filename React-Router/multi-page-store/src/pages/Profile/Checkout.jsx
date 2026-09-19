const Checkout = () => {
  return (
    <div>
      <div className="bg-gray-900 text-gray-300 min-h-screen flex items-center justify-center">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full text-center">
            <div className="max-w-md mx-auto bg-gray-800 rounded border border-gray-700 p-8 shadow-md">
              <h1 className="text-2xl font-bold text-blue-500 mb-4">Thank You for Your Order!</h1>
              <p className="text-sm text-gray-300">
                Your checkout was successful. We are getting your items ready for shipment!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Checkout
