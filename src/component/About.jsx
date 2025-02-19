const stats = [
    { name: 'Industries Served', value: '12' },
    { name: 'Users Reached', value: '30M+' },
    { name: 'Employees', value: '150+' },
]

export default function Example() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-30">
            <img
                alt=""
                src="https://e8uf5uhz4d2.exactdn.com/wp-content/uploads/2024/11/Green-companies-1.jpg"
                className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-25"
            />
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
            </div>
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">About Us</h2>
                    <p className="mt-8 text-pretty text-sm font-normal text-gray-300 sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper laoreet convallis. Integer euismod augue at
                        congue mollis. Suspendisse imperdiet tempor vulputate. Donec in tincidunt arcu. Aenean mi justo, interdum placerat ornare
                        non, aliquam non nisl. Mauris ut gravida quam, eget interdum enim. Fusce ut urna diam.
                    </p>
                    
                    <p className="mt-8 text-pretty text-sm font-normal text-gray-300 sm:text-lg">
                    Nulla fringilla tincidunt blandit. Nulla eget leo eleifend, placerat leo nec, euismod libero. Mauris vestibulum augue dui, sit 
                    amet volutpat risus vulputate a. Curabitur congue pulvinar dolor id efficitur. Donec mollis sapien sed facilisis pellentesque. 
                    Duis viverra mattis velit, vitae laoreet arcu convallis suscipit.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse gap-1">
                                <dt className="text-xl font-normal text-[#f4ff2c]">{stat.name}</dt>
                                <dd className="text-5xl font-semibold tracking-tight text-[#f4ff2c]">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
