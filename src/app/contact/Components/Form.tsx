export default function Form() {
    return (
        <section className="bg-black px-6 py-10 text-white text-center">
            <h4 className="mb-8 font-semibold text-2xl sm:text-3xl capitalize">
                Get in touch and we&#39;ll be happy to help.
            </h4>

            <form className="space-y-4 mx-auto max-w-xl text-left">
                <div className="flex sm:flex-row flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="bg-transparent p-3 border border-white focus:border-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full text-white placeholder-gray-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="bg-transparent p-3 border border-white focus:border-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full text-white placeholder-gray-400"
                    />
                </div>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="bg-transparent p-3 border border-white focus:border-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full text-white placeholder-gray-400"
                />
                <textarea
                    name="comment"
                    rows={4}
                    placeholder="Comment"
                    className="bg-transparent p-3 border border-white focus:border-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full text-white placeholder-gray-400"
                />

                <div className="pt-4">
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-white transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
